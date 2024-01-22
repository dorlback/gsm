import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faXmark, faCalendarDays, faUserGroup, faCheck, faBroom, faUser } from "@fortawesome/free-solid-svg-icons";

export const MenuIcon = () => {
    return (
        <FontAwesomeIcon icon={faBars} className="h-full" />
    )
}

export const CalendarIcon = () => {
    return (
        <FontAwesomeIcon icon={faCalendarDays} className="h-full" />
    )
}

export const UserGroupIcon = () => {
    return (
        <FontAwesomeIcon icon={faUserGroup} className="h-full" />
    )
}

export const BroomIcon = () => {
    return (
        <FontAwesomeIcon icon={faBroom} className="h-full" />
    )
}

export const CheckIcon = () => {
    return (
        <FontAwesomeIcon icon={faCheck} className="h-full" />
    )
}

export const UserIcon = () => {
    return (
        <FontAwesomeIcon icon={faUser} className="h-full" />
    )
}

export const XmarkIcon = () => {
    return (
        <FontAwesomeIcon icon={faXmark} className="h-full" />
    )
}

export const HomeIcon = () => {
    return (
        <FontAwesomeIcon icon={faHouse} className="h-full" />
    )
}

