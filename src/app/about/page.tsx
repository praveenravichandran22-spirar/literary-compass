import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About - Literary Compass',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-extrabold tracking-tight sm:text-5xl">
            About Literary Compass
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your guide to the world of books, powered by modern technology and a love for reading.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Usage Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base">
            <p>
              Literary Compass is designed for intuitive book discovery. Here's how to navigate the application:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Homepage</strong>: Start your journey from the homepage, where you can choose between major categories like "Books" and "Children's Books".
              </li>
              <li>
                <strong>Category Pages</strong>: After selecting a category, you can drill down into subcategories (e.g., Fiction, Mystery). This page also features AI-powered suggestions for related genres you might enjoy.
              </li>
              <li>
                <strong>Book Details</strong>: Click on any book to view its detailed page, which includes a full description, reviews, and AI-powered recommendations for similar books.
              </li>
              <li>
                <strong>AI Recommendations</strong>: The recommendations on the product detail page are personalized based on the book you're viewing and a simulated browsing history stored in your browser.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Deployment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>This application is optimized for deployment on Firebase App Hosting. Follow these steps to deploy your own instance:</p>
            
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Prerequisites</AlertTitle>
              <AlertDescription>
                Ensure you have the <a href="https://firebase.google.com/docs/cli" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Firebase CLI</a> installed and you are logged into your Google account.
              </AlertDescription>
            </Alert>
            
            <ol className="list-decimal list-inside space-y-6">
              <li>
                <h3 className="font-semibold inline">Initialize Firebase</h3>
                <p className="pl-2">If you haven't already, run `firebase init hosting` in your project directory and select "App Hosting" to connect to a Firebase project.</p>
              </li>
              <li>
                <h3 className="font-semibold inline">Build and Deploy</h3>
                <p className="pl-2">Run the following command to build and deploy the application:</p>
                <pre className="mt-2 p-4 bg-muted rounded-md text-sm font-code"><code>firebase deploy --only hosting</code></pre>
                <p className="pl-2 mt-2 text-muted-foreground">This command automatically builds your Next.js app and deploys it to a live, production-ready backend managed by Firebase.</p>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
