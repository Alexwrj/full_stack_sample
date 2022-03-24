import React from 'react';
import moment from "moment";

import './style.css';

export const Message = ({
  createdAt,
  message,
  author,
  authorAvatar,
  authorId,
}) => (
  <div className="message_wrapper">
    <div className="message_icon">
      <img alt={`avatar_${authorId}`} src={authorAvatar} />
    </div>
    <div className="message_body">
      <div className="message_body__title">
        <p className="message_body__title_author">{author}</p>
        <p className="message_body__title_date">{moment(createdAt).format('DD/MM/YYYY hh:mm')}</p>
      </div>
      <p className="message_body__text">
        {message}
      </p>
    </div>
  </div>
)
