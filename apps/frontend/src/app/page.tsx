import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@devaily/shared/ui'; // Import using the path alias

export default function Index() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Devaily home</CardTitle>
          <CardDescription>This is the temporary home page of Devaily</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the temporary home page of Devaily</p>
        </CardContent>
      </Card>
    </main>
  );
}
