
// ======================================
// RADAR-DS V2 - SUPABASE CONNECTION
// ======================================

const SUPABASE_URL = "https://lesypuliuzxivpwxpard.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_SBliyiLlKWRuVCWO_XhnoQ_T4RPyqsq";

// Initialize Supabase
if (!window.supabase) {
    throw new Error("Supabase library belum dimuat.");
}

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

// Make client available to website
window.supabaseClient = supabaseClient;

console.log("RADAR-DS: Supabase client initialized");

