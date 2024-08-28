import React, { useEffect, useState } from 'react'
import { useThemeContext } from './useThemeContext';
import { THEME_ENUM } from '@/enums/enums';

const useGetColor = () => {
    const { theme } = useThemeContext();

    const [color, setColor] = useState<string>("white")
  
    useEffect(() => {
      if (theme !== THEME_ENUM.DARK) {
          setColor("black");
      } else {
        setColor("white");
      }
    }, [theme]);

    return {color};
}

export default useGetColor