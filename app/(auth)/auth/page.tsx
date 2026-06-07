import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Page() {
  return (
    <div className=" w-full flex items-center justify-center p-4 ">
      <Tabs
        defaultValue="SignIn"
        className="w-full max-w-md flex flex-col items-center"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="SignIn">Sign In</TabsTrigger>
          <TabsTrigger value="SignUp">Sign Up</TabsTrigger>
        </TabsList>

        <TabsContent
          value="SignIn"
          className="mt-6 w-full flex justify-center"
        >
          <Card className="w-full">
            <CardContent className="p-6">
              <SignIn />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="SignUp"
          className="mt-6 w-full flex justify-center"
        >
          <Card className="w-full">
            <CardContent className="p-6">
              <SignUp />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}