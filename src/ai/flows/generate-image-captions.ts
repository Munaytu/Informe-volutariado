'use server';
/**
 * @fileOverview Este archivo define un flujo de Genkit para generar pies de foto para imágenes usando IA.
 *
 * - generateImageCaption - Una función que toma un URI de datos de imagen y una indicación del usuario y devuelve un pie de foto generado por IA.
 * - GenerateImageCaptionInput - El tipo de entrada para la función generateImageCaption.
 * - GenerateImageCaptionOutput - El tipo de retorno para la función generateImageCaption.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateImageCaptionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "Una foto para la que se generarán pies de foto, como un URI de datos que debe incluir un tipo MIME y usar codificación Base64. Formato esperado: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  userPrompt: z.string().describe('Indicación del usuario para guiar la generación de pies de foto.'),
});
export type GenerateImageCaptionInput = z.infer<typeof GenerateImageCaptionInputSchema>;

const GenerateImageCaptionOutputSchema = z.object({
  caption: z.string().describe('El pie de foto generado para la imagen.'),
});
export type GenerateImageCaptionOutput = z.infer<typeof GenerateImageCaptionOutputSchema>;

export async function generateImageCaption(input: GenerateImageCaptionInput): Promise<GenerateImageCaptionOutput> {
  return generateImageCaptionFlow(input);
}

const generateImageCaptionPrompt = ai.definePrompt({
  name: 'generateImageCaptionPrompt',
  input: {schema: GenerateImageCaptionInputSchema},
  output: {schema: GenerateImageCaptionOutputSchema},
  prompt: `Eres un asistente de IA que ayuda a generar pies de foto concisos y atractivos para imágenes.

  Dada la siguiente imagen y la indicación del usuario, genera un pie de foto que sea relevante, descriptivo y cautivador.
  El pie de foto no debe tener más de 50 palabras.

  Indicación del usuario: {{{userPrompt}}}
  Imagen: {{media url=photoDataUri}}

  Pie de foto:`,
});

const generateImageCaptionFlow = ai.defineFlow(
  {
    name: 'generateImageCaptionFlow',
    inputSchema: GenerateImageCaptionInputSchema,
    outputSchema: GenerateImageCaptionOutputSchema,
  },
  async input => {
    const {output} = await generateImageCaptionPrompt(input);
    return output!;
  }
);
