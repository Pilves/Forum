# Forum Database Schema Overview

This document provides an overview of the database schema used for managing a forum. It includes details about the tables, their purposes, fields, and the relationships between them.

## Tables Description

### Users Table
- **Purpose**: Stores data about the forum users.
- **Fields**:
  - `user_id`: Primary key, automatically increments.
  - `username`: Stores the username, must be non-null.
  - `password_hash`: Stores the hashed password, must be non-null.
  - `email`: Stores the user's email, must be unique and non-null.
  - `join_date`: Stores the datetime the user joined the forum.
  - `last_login`: Stores the datetime the user last logged in.

### Categories Table
- **Purpose**: Holds the different categories under which threads can be classified.
- **Fields**:
  - `category_id`: Primary key, automatically increments.
  - `name`: The name of the category, non-null.
  - `description`: A text description of what the category is about.

### Threads Table
- **Purpose**: Contains threads started by users within a specific category.
- **Fields**:
  - `thread_id`: Primary key, automatically increments.
  - `category_id`: Foreign key that links to Categories, non-null.
  - `title`: The title of the thread, non-null.
  - `created_by`: Foreign key that links to Users indicating who created the thread.
  - `created_at`: Datetime when the thread was created.
- **Relationships**:
  - Links to `Categories` via `category_id`.
  - Links to `Users` via `created_by`.

### Posts Table
- **Purpose**: Stores individual posts within a thread.
- **Fields**:
  - `post_id`: Primary key, automatically increments.
  - `thread_id`: Foreign key that links to Threads, non-null.
  - `user_id`: Foreign key that links to Users, non-null.
  - `post_content`: The content of the post, stored as text.
  - `timestamp`: Datetime when the post was made.
- **Relationships**:
  - Links to `Threads` via `thread_id`.
  - Links to `Users` via `user_id`.

### Comments Table
- **Purpose**: Stores comments or replies to posts.
- **Fields**:
  - `comment_id`: Primary key, automatically increments.
  - `post_id`: Foreign key that links to Posts, non-null.
  - `user_id`: Foreign key that links to Users, non-null.
  - `content`: The textual content of the comment.
  - `timestamp`: Datetime when the comment was posted.
- **Relationships**:
  - Links to `Posts` via `post_id`.
  - Links to `Users` via `user_id`.

## Visual Representation of Relationships

- `Categories` --(category_id)--> `Threads`
- `Users` --(user_id)--> `Threads` (through `created_by`)
- `Threads` --(thread_id)--> `Posts`
- `Users` --(user_id)--> `Posts`
- `Posts` --(post_id)--> `Comments`
- `Users` --(user_id)--> `Comments`
