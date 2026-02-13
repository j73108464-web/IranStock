import { supabase } from '../../supabaseClient';
import { Ad } from '../types/Ad';

export async function fetchAds(): Promise<Ad[]> {
  const { data, error } = await supabase
    .from('ads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data as Ad[];
}
