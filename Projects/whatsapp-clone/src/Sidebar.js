import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar src="https://scontent.fknu1-1.fna.fbcdn.net/v/t1.0-9/117342670_3023799717719267_9052919133818707453_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=iclrRl-4M0cAX9VVrzH&_nc_ht=scontent.fknu1-1.fna&oh=bfc1201b19194c34ce442019fb3d2b1f&oe=5F8D44EB" />
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlinedIcon />
					<input placeholder="Search or start new chat" type="text" />
				</div>
			</div>
			<div className="sidebar__chats">
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
}

export default Sidebar;
