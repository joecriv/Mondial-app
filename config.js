// Per-shop branding — MONDIAL
const BRAND = {

    accessCode:   'Thenry12',

    companyName:  'MONDIAL',
    tagline:      '',

    // Slate blue-grey from logo background
    accentColor:  '#5fb8c2',   // teal accent (from logo diamond)
    primaryColor: '#3d5a68',   // slate blue-grey (logo background)

    storagePrefix: 'mondial',

    logoPath:     null,

    // ── SERVICE KEYS ──────────────────────────────────────────
    // These need to be replaced with Mondial's own Clerk app + Supabase project
    // For now, sharing Italnord's backend (same Supabase, same Clerk)
    // TODO: Create separate Clerk app for Mondial
    clerkPublishableKey: 'pk_test_Zmxvd2luZy1maWxseS02Ni5jbGVyay5hY2NvdW50cy5kZXYk',

    supabaseUrl:  'https://lhmafiizghcfefrohtvm.supabase.co',
    supabaseKey:  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxobWFmaWl6Z2hjZmVmcm9odHZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5OTM4ODIsImV4cCI6MjA5MTU2OTg4Mn0.RQ_hy9ID-99wYUvopQfC27RP-E8iZQ5faSG9-Qal-KQ',

};

if (typeof window !== 'undefined') { window.BRAND = BRAND; }
