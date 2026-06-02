import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LucideIcon, Newspaper } from "lucide-react"


interface DashboardCardProps {
    title:string ; 
    count:number ; 
    icon :React.ReactElement<LucideIcon>
}



export function DashBoardCard({title,count,icon}:DashboardCardProps) {
  return (
    <Card size="sm" className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
      <CardContent>

        <h3 className="text-center text-3xl mb-4 font-bold text-slate-500 dark:text-slate-200">{title}</h3>
      

      <div className="flex justify-center items-center gap-5">

        {icon}

        <h3 className="text-5xl font-semibold text-slate-500
         dark:text-slate-200">
           {count}
        </h3>

      </div>
      
      
      </CardContent>
    
    </Card>
  )
}
