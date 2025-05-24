import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// Строка подключения к PostgreSQL
const connectionString = 'postgresql://postgres:NnocFukMmeCWPfkcSLZyOdrECfuFEsHS@switchyard.proxy.rlwy.net:30402/railway';

// Функция для создания таблицы
async function createTableIfNotExists() {
  const pool = new Pool({ connectionString });
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS teams (
        id SERIAL PRIMARY KEY,
        team_name VARCHAR(255) NOT NULL,
        institution VARCHAR(255) NOT NULL,
        team_leader_name VARCHAR(255) NOT NULL,
        team_leader_email VARCHAR(255) NOT NULL,
        team_leader_phone VARCHAR(50),
        members JSONB NOT NULL,
        motivation TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database table checked/created successfully');
    return true;
  } catch (error) {
    console.error('Error creating table:', error);
    return false;
  } finally {
    await pool.end();
  }
}

export async function GET(request: Request) {
  // Создаем новое подключение для операции
  const pool = new Pool({ connectionString });
  
  try {
    // Получаем все команды из базы данных
    const result = await pool.query(`
      SELECT id, team_name, institution, team_leader_name, team_leader_email, 
             team_leader_phone, members, motivation, created_at 
      FROM teams 
      ORDER BY created_at DESC
    `);

    // Возвращаем список команд
    return NextResponse.json({ 
      success: true, 
      teams: result.rows 
    });
  } catch (error) {
    console.error('Error fetching teams:', error);
    
    // Возвращаем ошибку
    return NextResponse.json(
      { success: false, message: 'Failed to fetch teams', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  } finally {
    // Закрываем подключение в любом случае
    await pool.end();
  }
}

export async function POST(request: Request) {
  try {
    // Убедимся, что таблица существует перед обработкой запроса
    const tableCreated = await createTableIfNotExists();
    if (!tableCreated) {
      return NextResponse.json(
        { success: false, message: 'Database initialization failed' },
        { status: 500 }
      );
    }

    // Создаем новое подключение для операции
    const pool = new Pool({ connectionString });

    try {
      // Получаем данные из запроса
      const data = await request.json();
      const { 
        team_name,
        institution,
        team_leader_name,
        team_leader_email,
        team_leader_phone,
        members,
        motivation
      } = data;

      // Проверяем обязательные поля
      if (!team_name || !institution || !team_leader_name || !team_leader_email) {
        return NextResponse.json(
          { success: false, message: 'Missing required fields' },
          { status: 400 }
        );
      }

      // Сохраняем данные в базу
      const result = await pool.query(
        `INSERT INTO teams (
          team_name, institution, team_leader_name, team_leader_email, 
          team_leader_phone, members, motivation
        ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, team_name, created_at`,
        [
          team_name,
          institution,
          team_leader_name,
          team_leader_email,
          team_leader_phone || null,
          JSON.stringify(members),
          motivation || null
        ]
      );

      // Возвращаем успешный ответ
      return NextResponse.json({ 
        success: true, 
        message: 'Team created successfully', 
        team: result.rows[0]
      });
    } finally {
      // Закрываем подключение в любом случае
      await pool.end();
    }
  } catch (error) {
    console.error('Error creating team:', error);
    
    // Возвращаем ошибку
    return NextResponse.json(
      { success: false, message: 'Failed to create team', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// Add OPTIONS handler for CORS preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 