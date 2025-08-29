import { supabase } from "./supabaseConfig";

export async function uploadImage(file, bucket = "images") {
  if (!file) throw new Error("No se seleccionó ningún archivo");

  const filePath = `${Date.now()}-${file.name}`; 

  const { error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  if (error) throw error;

  const { data: urlData, error: urlError } = supabase.storage.from(bucket).getPublicUrl(filePath);
  if (urlError) throw urlError;
  return urlData.publicUrl;
}
