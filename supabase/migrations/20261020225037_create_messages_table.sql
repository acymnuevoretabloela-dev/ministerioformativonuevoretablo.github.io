/*
# Create messages table for prayer requests and contact inquiries

1. New Tables
- `messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `phone` (text, nullable) — optional phone number
  - `message_type` (text, not null) — 'general' or 'prayer'
  - `message` (text, not null) — the message content
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `messages`.
- Allow anon + authenticated INSERT only (public can submit forms).
- No SELECT/UPDATE/DELETE for anon (only church admins should read submissions).
*/

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message_type text NOT NULL DEFAULT 'general',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_messages" ON messages;
CREATE POLICY "anon_insert_messages"
ON messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
