import React from "react";
import PropTypes from "prop-types";

/** Icons Start */
import DropDownArrow from "./DropDownArrow";
import Search from "./Search";
import Calendar from "./Calendar";
import ViewSimple from "./ViewSimple";
import Bin from "./Bin";
import DashBoard from "./Dashboard";
import Chart from "./Chart";
import Toggle from "./Toggle";
import Paper from "./Paper";
import Graph from "./Graph";
import Chatroom from "./Chatroom";
import Repeat from "./Repeat";
import Setting from "./Setting";
import Home from "./Home";
import Profile from "./Profile";
import Download from "./Download";
import Message from "./Message";
import NotificationBell from "./NotificationBell";
import Attachment from "./Attachment";
import RingBell from "./RingBell";
import Dot from "./Dot";
import Line from './Line';
import Left from './Left';
import Right from './Right';
import Edit from "./Edit";
import Link from "./Link";
import TrashCan from "./TrashCan";
import PdfType from "./PdfType";
import ZipType from "./ZipType";
import DocType from "./DocType";
import UnknownFile from "./UnknownFile";
import PngType from "./PngType";
import GifType from "./GifType";
import TaskIcon from "./TaskIcon";
import JpgType from "./JpgType";
import SvgType from "./SvgType";
import TxtType from "./TxtType";
import FileIcon from "./FileIcon";
import Camera from './Camera';
/** Icons End */


const Kinds = {
    "drop-down-arrow": DropDownArrow,
    "search": Search,
    "calendar": Calendar,
    "view-simple": ViewSimple,
    "bin": Bin,
    "dash-board": DashBoard,
    "chart": Chart,
    "toggle": Toggle,
    "paper": Paper,
    "graph": Graph,
    "chatroom": Chatroom,
    "repeat": Repeat,
    "setting": Setting,
    "home": Home,
    "profile": Profile,
    "download": Download,
    "message": Message,
    "notification-bell": NotificationBell,
    "attachment": Attachment,
    "ring-bell": RingBell,
    "dot": Dot,
    "line": Line,
    "edit": Edit,
    "link": Link,
    "trashCan":TrashCan,
    "pdfType": PdfType,
    "zipType":ZipType,
    "docType": DocType,
    "unknownFile": UnknownFile,
    "pngType": PngType,
    "gifType": GifType,
    "taskIcon": TaskIcon,
    "jpgType": JpgType,
    "svgType":SvgType,
    "txtType": TxtType,
    "fileIcon": FileIcon,
    "camera": Camera,
}

const propTypes = {
    color: PropTypes.string,
    kind: PropTypes.oneOf(Object.keys(Kinds))
};

const defaultProps = {
    color: "gray"
};

function Icon(props) {
    return React.createElement(Kinds[props.kind], { ...props });
}

Icon.displayName = "Icon";
Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;