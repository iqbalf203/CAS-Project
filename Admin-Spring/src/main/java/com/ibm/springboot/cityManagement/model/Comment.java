package com.ibm.springboot.cityManagement.model;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
//import org.springframework.data.annotation.Id;

import java.util.Date;

public class Comment {

//	    @Id
	    private String id;
	    private String content;
	    private User commenter;
	    private Suggestion suggestion;
	    private Date creationDate = new Date();
	    
	    
		public Comment() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Comment(String id, String content, User commenter, Suggestion suggestion, Date creationDate) {
			super();
			this.id = id;
			this.content = content;
			this.commenter = commenter;
			this.suggestion = suggestion;
			this.creationDate = creationDate;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getContent() {
			return content;
		}
		public void setContent(String content) {
			this.content = content;
		}
		public User getCommenter() {
			return commenter;
		}
		public void setCommenter(User commenter) {
			this.commenter = commenter;
		}
		public Suggestion getSuggestion() {
			return suggestion;
		}
		public void setSuggestion(Suggestion suggestion) {
			this.suggestion = suggestion;
		}
		public Date getCreationDate() {
			return creationDate;
		}
		public void setCreationDate(Date creationDate) {
			this.creationDate = creationDate;
		}
		@Override
		public String toString() {
			return "Comment [id=" + id + ", content=" + content + ", commenter=" + commenter + ", suggestion="
					+ suggestion + ", creationDate=" + creationDate + "]";
		}



}


