import React from 'react';
import { Badge } from '@/components/ui/badge';
import {BsStarFill} from "react-icons/bs";

const StarBadge = () => {
  return (
    <Badge variant={"default"} className='
      bg-gradient-to-tr
      from-red-700
      via-pink-600
      to-rose-400
      hover:from-red-600
      hover:via-pink-500
      hover:to-rose-300
    '>
        <BsStarFill className='h-4 w-4 mr-2' /> 3.5
    </Badge>
  )
}

export default StarBadge