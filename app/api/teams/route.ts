import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// Строка подключения к PostgreSQL
const connectionString = 'postgresql://postgres:NnocFukMmeCWPfkcSLZyOdrECfuFEsHS@switchyard.proxy.rlwy.net:30402/railway';

export async function GET(request: Request) {
  // Создаем новое подключение для операции
  const pool = new Pool({ connectionString });
  
  try {
    // Получаем все команды из базы данных
    const result = await pool.query(`
      SELECT id, team_name, institution, team_leader_name, team_leader_email, 
             members, created_at 
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