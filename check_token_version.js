const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function addTokenVersionColumn() {
    console.log('Checking for token_version column...');

    // Try to select the column to see if it exists
    const { data, error } = await supabase
        .from('admins')
        .select('token_version')
        .limit(1);

    if (!error) {
        console.log('✅ token_version column already exists.');
        return;
    }

    console.log('Adding token_version column via SQL...');

    // Supabase JS doesn't support ALTER TABLE directly to add column if RLS prevents it or similar.
    // But we can try to call a stored procedure or use raw SQL if enabled. 
    // However, usually we can't run DDL via client unless we use the SQL editor or specific privileges.
    // Actually, standard PostgREST doesn't support DDL.

    console.log('⚠️ IMPORTANT: You need to run this SQL in your Supabase SQL Editor:');
    console.log('ALTER TABLE admins ADD COLUMN token_version INTEGER DEFAULT 0;');
}

addTokenVersionColumn();
