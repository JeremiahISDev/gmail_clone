import React from 'react';
import NavigationListItem from "./NavigationListItem";
import Paths from "../../config/paths";
import isSelected from "./isSelected";
import {useLocation} from "react-router-dom";

const NavigationList = () => {
    const location = useLocation();
    const pathname = location.pathname;
    
    return (
        <nav className="navigation-bar__nav">
            <ul className="navigation-bar__ul">
                <NavigationListItem
                    label="Inbox"
                    isSelected={isSelected(pathname, Paths.inbox)}
                    path={Paths.inbox}
                />
                <NavigationListItem
                    label="Important"
                    isSelected={isSelected(pathname, Paths.important)}
                    path={Paths.important}
                />
                <NavigationListItem
                    label="Sent Mail"
                    isSelected={isSelected(pathname, Paths.sentMail)}
                    path={Paths.sentMail}
                />
                <NavigationListItem
                    label="Drafts"
                    isSelected={isSelected(pathname, Paths.drafts)}
                    path={Paths.drafts}
                />
                <NavigationListItem
                    label="Spam"
                    isSelected={isSelected(pathname, Paths.spam)}
                    path={Paths.spam}
                />
            </ul>    
        </nav>
    )
}
export default NavigationList;
