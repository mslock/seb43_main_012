import React from 'react';
import { Link } from 'react-router-dom';

//import style
import * as TN from '../styles/TopNavStyle';

//import icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCommentMedical, faClockRotateLeft, faBookBookmark, faBook } from '@fortawesome/free-solid-svg-icons';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
// <FontAwesomeIcon icon={duotone('message-plus')} />;
// import { IconProp } from '@fortawesome/fontawesome-svg-core';
// @ts-ignore
import { ReactComponent as HistoryIcon } from '../assets/icons/iconHistory.svg';
// @ts-ignore
import { ReactComponent as ChatIcon } from '../assets/icons/iconNewChat.svg';
// @ts-ignore
import { ReactComponent as CollectionIcon } from '../assets/icons/iconCollectionsNew.svg';

type TopNavProps = {
  showHistory: boolean;
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
  showPinnedItems: boolean;
  setShowPinnedItems: React.Dispatch<React.SetStateAction<boolean>>;
};

const TopNav = ({ showHistory, setShowHistory, showPinnedItems, setShowPinnedItems }: TopNavProps) => {
  const handleHistoryBtnClick = () => {
    setShowHistory(!showHistory);
    if (showPinnedItems) setShowPinnedItems(false);
  };

  const handleCollectionsBtnClick = () => {
    setShowPinnedItems(!showPinnedItems);
    if (showHistory) setShowHistory(false);
  };

  const handleNewChatBtnClick = () => {
    if (showPinnedItems) setShowPinnedItems(false);
    if (showHistory) setShowHistory(false);
  };

  return (
    <TN.TopNavBox>
      <TN.LogoBox>
        <Link to="/">Chatcrawl</Link>
      </TN.LogoBox>
      <TN.NavIconsBox>
        <TN.AvatarBox className="navitem" onClick={handleHistoryBtnClick}>
          <Link to="/">
            <HistoryIcon className="svg" />
            {/* <img src={historyIcon} /> */}
            {/* <FontAwesomeIcon icon={faClockRotateLeft as IconProp} /> */}
          </Link>
        </TN.AvatarBox>
        <TN.AvatarBox className="navitem" onClick={handleNewChatBtnClick}>
          <Link to="/">
            <ChatIcon className="svg center" />
            {/* <img className="center" src={chatIcon} /> */}
            {/* <FontAwesomeIcon icon={faCommentMedical as IconProp} /> */}
          </Link>
        </TN.AvatarBox>
        <TN.AvatarBox className="navitem" onClick={handleCollectionsBtnClick}>
          <Link to="/bookmarks">
            <CollectionIcon className="svg" />
            {/* <img src={bookmarkIcon} /> */}
            {/* <FontAwesomeIcon icon={faBookBookmark as IconProp} /> */}
          </Link>
        </TN.AvatarBox>
      </TN.NavIconsBox>
      <TN.MemberBox>
        <TN.StyledSpan>
          <Link to="/mypage">MyPage</Link>
        </TN.StyledSpan>
        <TN.StyledSpan>
          <Link to="/signup">Signup</Link>
        </TN.StyledSpan>
      </TN.MemberBox>
    </TN.TopNavBox>
  );
};
export default TopNav;
