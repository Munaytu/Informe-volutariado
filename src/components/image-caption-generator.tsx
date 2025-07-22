"use client";

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { generateImageCaption } from '@/ai/flows/generate-image-captions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Bot, Image as ImageIcon, Sparkles, Loader2 } from 'lucide-react';

export function ImageCaptionGenerator() {
  const [userPrompt, setUserPrompt] = useState('');
  const [photoDataUri, setPhotoDataUri] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoDataUri(result);
        setImagePreview(result);
        setGeneratedCaption(''); // Reset caption on new image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!photoDataUri) {
      toast({
        variant: 'destructive',
        title: 'No Image Selected',
        description: 'Please upload an image to generate a caption.',
      });
      return;
    }

    setIsLoading(true);
    setGeneratedCaption('');
    try {
      const result = await generateImageCaption({ photoDataUri, userPrompt });
      setGeneratedCaption(result.caption);
    } catch (error) {
      console.error('Error generating caption:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate caption. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full h-full max-w-lg mx-auto shadow-lg border-accent/20 flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-2xl text-accent">
          <Bot />
          AI-Powered Storytelling
        </CardTitle>
        <CardDescription>
          In my communication role, AI was a great ally. Use this tool to see how I generated ideas and captions for my photos.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
        <CardContent className="space-y-6 flex-grow">
          <div className="space-y-2">
            <Label htmlFor="image-upload" className="font-semibold flex items-center gap-2 cursor-pointer">
              <ImageIcon className="text-muted-foreground" />
              <span>1. Upload an Image</span>
            </Label>
            <Input id="image-upload" type="file" accept="image/*" onChange={handleFileChange} className="cursor-pointer file:text-accent file:font-semibold"/>
          </div>

          {imagePreview && (
            <div className="mt-4">
              <img src={imagePreview} alt="Selected preview" className="rounded-md object-cover w-full h-48" />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="user-prompt" className="font-semibold">2. Guiding Prompt (Optional)</Label>
            <Textarea
              id="user-prompt"
              placeholder="e.g., A moment of peace by the lake..."
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
            />
          </div>

          {generatedCaption && (
            <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
              <p className="font-semibold text-primary flex items-center gap-2"><Sparkles className="text-accent" /> Generated Caption:</p>
              <p className="text-primary/90 mt-2 italic">"{generatedCaption}"</p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading || !photoDataUri} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              '3. Generate Caption'
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
