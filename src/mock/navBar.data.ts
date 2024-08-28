import { navBarDataProps } from '@/interfaces/interfaces'
import { DashboardIcon, CalendarIcon, MixerHorizontalIcon, BookmarkIcon, BackpackIcon  } from '@radix-ui/react-icons'


export const navBarData: navBarDataProps[] = [
    {
        id: 1,
        title: "Dashboard",
        icon: DashboardIcon,
        link: "dashboard",
    },
    {
        id: 2,
        title: "Calendar",
        icon: CalendarIcon,
        link: "calendar",
    },
    {
        id: 3,
        title: "Events",
        icon: BookmarkIcon,
        link: "events",
    },
    {
        id: 4,
        title: "Offers & Deals",
        icon: BackpackIcon,
        link: "offers-deals",
    },
    {
        id: 5,
        title: "Settings",
        icon: MixerHorizontalIcon,
        link: "settings",
    }
]
