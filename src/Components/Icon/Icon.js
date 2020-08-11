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
import ArrowW from './ArrowW';
import ArrowH from './ArrowH';
import HomeW from './HomeW';
import HomeB from './HomeB';
import HomeDG from './HomeDG';
import SaveW from './SaveW';
import SaveB from './SaveB';
import SaveDG from './SaveDG';
import SaveLG from './SaveLG';
import MessageW from './MessageW';
import MessageB from './MessageB';
import MessageDG from './MessageDG';
import MessageLG from './MessageLG';
import UploadW from './UploadW';
import UploadB from './UploadB';
import UploadDG from './UploadDG';
import DownloadLG from './DownloadLG';
import EditH from './EditH';
import EditLG from './EditLG';
import MenuW from './MenuW';
import FilterExit from './FilterExit';
import ExpandW from './ExpandW';
import ShareDG from './ShareDG';
import ThumbnailW from './ThumbnailW';
import ThumbnailDG from './ThumbnailDG';
import PortraitW from './PortraitW';
import PortraitDG from './PortraitDG';
import ExitW from './ExitW';
import Options from './Options';
import SearchLG from './SearchLG';
import ProfileInfoDOB from './ProfileInfoDOB';
import ProfileInfoEducation from './ProfileInfoEducation';
import ProfileInfoExperience from './ProfileInfoExperience';
import ProfileInfoInterestHobbies from './ProfileInfoInterestHobbies';
import ProfileInfoLivingIn from './ProfileInfoLivingIn';
import ProfileInfoProfessionalInterest from './ProfileInfoProfessionalInterest';
import ProfileInfoProfessionalStatus from './ProfileInfoProfessionalStatus';
import CameraDG from './CameraDG';
import CameraH from './CameraH';


// Dong su

import Dot2 from './Dot2'; // ********
import Home2 from './Home2';
import ArrowDG from './ArrowDG';
import ArrowH from './ArrowH';
import ArrowW from './ArrowW';
import HomeW from './HomeW.js';
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
    "dot2": Dot2, // **********
    "home2": Home2,
    "arrowH": ArrowH,
    "arroww": ArrowW,
    "arrowDG": ArrowDG,
    "homew": HomeW,
    "homeb": HomeB,
    "homedg": HomeDG,
    "savew": SaveW,
    "saveb": SaveB,
    "savedg": SaveDG,
    "savelg": SaveLG,
    "messagew": MessageW,
    "messageb": MessageB,
    "messagedg": MessageDG,
    "messagelg": MessageLG,
    "uploadw": UploadW,
    "uploadb": UploadB,
    "uploaddg": UploadDG,
    "downloadlg": DownloadLG,
    "edith": EditH,
    "menuw": MenuW,
    "filterexit": FilterExit,
    "expandw": ExpandW,
    "sharedg": ShareDG,
    "thumbnailw": ThumbnailW,
    "thumbnaildg": ThumbnailDG,
    "portraitw": PortraitW,
    "portraitdg": PortraitDG,
    "exitw": ExitW,
    "searchlg": SearchLG,
    "profileinfodob": ProfileInfoDOB,
    "profileinfoeducation": ProfileInfoEducation,
    "profileinfoexperience": ProfileInfoExperience,
    "profileinfointeresthobbies": ProfileInfoInterestHobbies,
    "profileinfolivingin": ProfileInfoLivingIn,
    "profileinfoprofessionalinterest": ProfileInfoProfessionalInterest,
    "profileinfoprofessionalstatus": ProfileInfoProfessionalStatus,
    "cameradg": CameraDG,
    "camerah": CameraH,
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