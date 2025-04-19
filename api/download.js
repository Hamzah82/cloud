import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

export default async (req, res) => {
  const { name } = req.query;

  if (!name) return res.status(400).json({ error: 'Missing file name' });

  const { data, error } = await supabase
    .from('downloads')
    .select('count')
    .eq('name', name)
    .single();

  if (error && error.code !== 'PGRST116') {
    return res.status(500).json({ error: error.message });
  }

  if (data) {
    await supabase
      .from('downloads')
      .update({ count: data.count + 1 })
      .eq('name', name);
  } else {
    await supabase
      .from('downloads')
      .insert([{ name, count: 1 }]);
  }

  res.status(200).json({ success: true });
};
