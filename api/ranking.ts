import { supabase } from '@/lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { data, error } = await supabase
    .from('ranking')
    .select('*')
    .order('pontos', { ascending: false })

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json(data);
}