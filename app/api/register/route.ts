import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// Строка подключения к PostgreSQL
const connectionString = 'postgresql://postgres:NnocFukMmeCWPfkcSLZyOdrECfuFEsHS@switchyard.proxy.rlwy.net:30402/railway';

// Функция для создания таблицы
async function createTableIfNotExists() {
  const pool = new Pool({ connectionString });
  try {
    // First, ensure the table exists with the basic schema
    await pool.query(`
      CREATE TABLE IF NOT EXISTS teams (
        id SERIAL PRIMARY KEY,
        team_name VARCHAR(255) NOT NULL,
        institution VARCHAR(255) NOT NULL,
        team_leader_name VARCHAR(255) NOT NULL,
        team_leader_email VARCHAR(255) NOT NULL,
        team_leader_phone VARCHAR(50) NOT NULL,
        members JSONB NOT NULL,
        motivation TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database table structure initially checked/created.');

    // Check if the 'city' column exists
    const checkColumnQuery = `
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name='teams' AND column_name='city';
    `;
    const { rows } = await pool.query(checkColumnQuery);

    if (rows.length === 0) {
      // If the column doesn't exist, add it
      await pool.query('ALTER TABLE teams ADD COLUMN city VARCHAR(255)');
      console.log('Column "city" added to "teams" table.');
    } else {
      console.log('Column "city" already exists in "teams" table.');
    }
    
    console.log('Database table schema verified/updated successfully');
    return true;
  } catch (error) {
    console.error('Error creating table:', error);
    return false;
  } finally {
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
      const { teamName, institution, teamLeaderName, teamLeaderEmail, teamLeaderPhone, members, motivation, city } = data;

      // Сохраняем данные в базу
      const result = await pool.query(
        `INSERT INTO teams (
          team_name, institution, team_leader_name, team_leader_email, team_leader_phone, members, motivation, city
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
        [teamName, institution, teamLeaderName, teamLeaderEmail, teamLeaderPhone, JSON.stringify(members), motivation, city]
      );

      // Возвращаем успешный ответ
      return NextResponse.json({ 
        success: true, 
        message: 'Team registered successfully', 
        teamId: result.rows[0].id 
      });
    } finally {
      // Закрываем подключение в любом случае
      await pool.end();
    }
  } catch (error) {
    console.error('Error registering team:', error);
    
    // Возвращаем ошибку
    return NextResponse.json(
      { success: false, message: 'Failed to register team', error: error instanceof Error ? error.message : String(error) },
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