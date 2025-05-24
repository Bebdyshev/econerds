import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Строка подключения к PostgreSQL
const connectionString = 'postgresql://postgres:NnocFukMmeCWPfkcSLZyOdrECfuFEsHS@switchyard.proxy.rlwy.net:30402/railway';

// GET запрос для получения конкретной команды
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const teamId = params.id;
  const pool = new Pool({ connectionString });
  
  try {
    const result = await pool.query(
      `SELECT id, team_name, institution, team_leader_name, team_leader_email, 
              team_leader_phone, members, motivation, created_at 
       FROM teams 
       WHERE id = $1`,
      [teamId]
    );
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Team not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      team: result.rows[0] 
    });
  } catch (error) {
    console.error('Error fetching team:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch team', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  } finally {
    await pool.end();
  }
}

// PUT запрос для обновления команды
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const teamId = params.id;
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
    
    // Проверяем существование команды
    const checkResult = await pool.query(
      'SELECT id FROM teams WHERE id = $1',
      [teamId]
    );
    
    if (checkResult.rows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Team not found' },
        { status: 404 }
      );
    }
    
    // Обновляем данные команды
    const result = await pool.query(
      `UPDATE teams 
       SET team_name = $1, 
           institution = $2, 
           team_leader_name = $3, 
           team_leader_email = $4, 
           team_leader_phone = $5, 
           members = $6, 
           motivation = $7
       WHERE id = $8
       RETURNING id, team_name, updated_at`,
      [
        team_name,
        institution,
        team_leader_name,
        team_leader_email,
        team_leader_phone || null,
        JSON.stringify(members),
        motivation || null,
        teamId
      ]
    );
    
    return NextResponse.json({ 
      success: true, 
      message: 'Team updated successfully',
      team: { id: teamId, team_name }
    });
  } catch (error) {
    console.error('Error updating team:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update team', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  } finally {
    await pool.end();
  }
}

// DELETE запрос для удаления команды
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const teamId = params.id;
  const pool = new Pool({ connectionString });
  
  try {
    // Проверяем существование команды
    const checkResult = await pool.query(
      'SELECT id FROM teams WHERE id = $1',
      [teamId]
    );
    
    if (checkResult.rows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Team not found' },
        { status: 404 }
      );
    }
    
    // Удаляем команду
    await pool.query(
      'DELETE FROM teams WHERE id = $1',
      [teamId]
    );
    
    return NextResponse.json({ 
      success: true, 
      message: 'Team deleted successfully',
      id: teamId
    });
  } catch (error) {
    console.error('Error deleting team:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete team', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  } finally {
    await pool.end();
  }
} 