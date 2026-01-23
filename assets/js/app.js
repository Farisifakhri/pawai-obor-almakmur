// ==========================================
// KONFIGURASI SUPABASE
// PENTING: Ganti dengan URL dan Key AA sendiri!
// ==========================================
const SUPABASE_URL = 'https://phjtoirinfntbkjtmtby.supabase.co'; // <-- GANTI INI
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoanRvaXJpbmZudGJranRtdGJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNzg3NDksImV4cCI6MjA4NDc1NDc0OX0.FaykLM3W-Ej3-2KbP4Wxz7RtLwApX7Q-Aj0KpbbnMws'; // <-- GANTI INI

// --- INI YANG KURANG (INISIALISASI) ---
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Proteksi Halaman
async function protectPage() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) window.location.href = '../login.html';
    return session;
}

// Logout
async function handleLogout() {
    await supabaseClient.auth.signOut();
    window.location.href = '../login.html';
}

console.log("Supabase Siap Digunakan!");