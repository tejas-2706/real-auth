
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vvusdphcwzgeyjuavneg.supabase.co/'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2dXNkcGhjd3pnZXlqdWF2bmVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MDIwNDMsImV4cCI6MjA0NDM3ODA0M30.8sXBxJYuvtF2LzMPRn5mww2duARRSOLeqNBuR2XM0zQ'
export const supabase = createClient(supabaseUrl, supabaseKey)
