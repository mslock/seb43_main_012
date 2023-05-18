package com.codestates.seb43_main_012.category;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ConversationCategoryRepository extends JpaRepository<ConversationCategory,Long> {
    void deleteAllByConversationConversationId(long conversationId);
    void deleteByBookmarkId(long bookmarkId);
    List<ConversationCategory> findAllByConversationConversationId(long conversationId);
}