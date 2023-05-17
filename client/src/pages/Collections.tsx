import { useSelector, useDispatch } from "react-redux";
import {
  setContent,
  setSelectedBookmark,
  setSelectedTag,
} from "../features/collection/collectionSlice";
import { RootState } from "../app/store";
import styled from "styled-components";
// import { useState } from "react";
// import data from "../data/data.json";
// @ts-ignore
import { ReactComponent as BookmarkSolid } from "../assets/icons/bookmark-solid.svg";
// @ts-ignore
import { ReactComponent as ThumbtackSolid } from "../assets/icons/thumbtack-solid.svg";

const Main = styled.main`
  /* display: flex; */
  /* justify-content: space-between; */
  /* background-color: #f0f0f0; */
  max-width: 1080px;
  padding: 0 40px 0 40px;
`;

const ContentWraper = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* text-align: center; */
  /* background-color: orange; */
  padding: 5px;
`;

const Content = styled.a`
  /* flex-basis: 30%; */
  flex-basis: 16rem;
  /* width: 17rem; */
  /* background-color: #f0f0f0; */
  padding: 5px;
  border: solid;
  border-color: #c9ad6e;
  border-radius: 10px;
  margin: 0 1% 1% 0;
  p {
    text-align: left;
    word-break: break-all;
  }

  .header {
    display: flex;
  }
  .title {
    /* word-break: break-all; */
  }
  .buttons {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .bookmark {
    color: #c9ad6e;
  }
  .tag {
    color: #7bb06e;
  }
`;

const FixedContent = styled(Content)`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: flex-start;
`;

const FixedContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #faf7f1;
`;

// const FixedPin = styled.a`
//   justify-content: center;
//   align-items: center;
//   padding: 5px;
//   margin: 5px;
//   background-color: #f0f0f0;
//   border: solid;
// `;

const BookmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10.5rem;
  /* background-color: blue; */
`;
const Bookmark = styled.button`
  /* background-color: #f0f0f0; */
  padding: 5px;
`;
const BookmarkAdd = styled.button`
  flex-basis: 10rem;
  /* background-color: #f0f0f0; */
  margin: 5px;
`;
const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 10.5rem;
  /* background-color: green; */
  margin: 10px 0 0 0;
`;
const Tag = styled.a`
  background-color: #f0f0f0;
  border-radius: 20px;
  margin: 0 5px 5px 0;
  padding: 5px;
`;

const BookmarkTagContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SvgButton = styled.button`
  width: 20px;
  border: none;
  margin: 20% 5% 0 5%;
  background-color: transparent;

  cursor: pointer;
`;

const BookmarkButton = () => {
  // const [clicked, setClicked] = useState(false);

  return (
    <SvgButton>
      <BookmarkSolid />
    </SvgButton>
  );
};

const PinButton = () => {
  return (
    <SvgButton>
      <ThumbtackSolid />
    </SvgButton>
  );
};

const Collections = () => {
  const dispatch = useDispatch();
  const { content, selectedBookmark, selectedTag } = useSelector(
    (state: RootState) => state.collection,
  );

  const handleBookmarkClick = (bookmark: string) => {
    dispatch(setSelectedBookmark(bookmark));
  };

  const handleTagClick = (tag: string) => {
    dispatch(setSelectedTag(tag));
  };

  const handleContentUpdate = (newContent: any) => {
    dispatch(setContent(newContent));
  };

  return (
    <Main>
      <FixedContentContainer>
        {content.conversations
          .filter((item) => item.pinned)
          .map((conversation) => (
            <FixedContent href="#" key={conversation.conversationId}>
              <div className="header">
                <h3 className="title">{conversation.title}</h3>
                <span className="buttons">
                  <PinButton /> <BookmarkButton />
                </span>
              </div>
              <p>{conversation.answerSummary}</p>
              <span className="bookmark">
                {conversation.bookmarks[0].bookmarkName}
              </span>

              <div className="tag">
                {conversation.tags.map((tag) => (
                  <span key={tag.tagId}>#{tag.tagName} </span>
                ))}
              </div>
            </FixedContent>
          ))}
      </FixedContentContainer>

      <BookmarkTagContent>
        <div>
          <BookmarkContainer>
            <Bookmark key={"All"} onClick={() => handleBookmarkClick("All")}>
              All
            </Bookmark>
            {content.bookmarks.map((bookmark) => (
              <Bookmark
                key={bookmark.categoryName}
                onClick={() => handleBookmarkClick(bookmark.categoryName)}
              >
                {bookmark.categoryName}
              </Bookmark>
            ))}
          </BookmarkContainer>
          <BookmarkAdd>+New Collection</BookmarkAdd>
          <TagContainer>
            {content.tags.map((tag) => (
              <Tag
                key={tag.tagName}
                onClick={() => handleTagClick(tag.tagName)}
              >
                {tag.tagName}
              </Tag>
            ))}
          </TagContainer>
        </div>
        <ContentWraper>
          <ContentContainer>
            {content.conversations
              .filter(
                (conversation) =>
                  selectedBookmark === "All" ||
                  conversation.bookmarks[0].bookmarkName === selectedBookmark,
              )
              .map((conversation) => (
                <Content key={conversation.conversationId} href="#">
                  <div className="header">
                    <h3 className="title">{conversation.title}</h3>
                    <span className="buttons">
                      <PinButton /> <BookmarkButton />
                    </span>
                  </div>
                  <span className="bookmark">
                    {" "}
                    {conversation.bookmarks[0].bookmarkName}
                  </span>
                  <div className="tag">
                    {conversation.tags.map((tag) => (
                      <span key={tag.tagId}>#{tag.tagName} </span>
                    ))}
                  </div>
                </Content>
              ))}
          </ContentContainer>
        </ContentWraper>

        <div></div>
      </BookmarkTagContent>
    </Main>
  );
};

export default Collections;
