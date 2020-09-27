import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import './notification.css';

const CommentForm = (props) => {
  const [newComment, setNewComment] = useState({
    userName: "",
    comment: "",
  });

  useEffect(() => {
    window.tinyMCE.remove(`#comment-${props.answerId}`);
    window.tinyMCE.init({
      selector: `#comment-${props.answerId}`,
      menubar: false,
      plugins: "link emoticons lists codesample ",
      toolbar:
        "styleselect |fontselect fontsizeselect bold italic underline blockquote| forecolor backcolor emoticons link | bullist numlist codesample ",
    });
  }, [props.answerId]);

  function submitHandler(e) {
    e.preventDefault();
    const commentValue = {
      ...newComment,
      comment: window.tinyMCE.get(`comment-${props.answerId}`).getContent(),
    };
    axios
      .post(
        `https://queueanda.herokuapp.com/answers/${props.answerId}/comment`,
        commentValue
      )
      .then((response) => {
        console.log(response);
        window.location.assign(`/questions/${props.questionId}`);
      })
      .catch((err) => console.log(err));
    clearData();
  }
  function clearData() {
    setNewComment({ userName: "", comment: "" });
  }

  const handelForm = (event) => {
    const commentValue = {
      ...newComment,
      [event.target.name]: event.target.value,
    };
    setNewComment(commentValue);
  };
  return (
    <div>
      <button className="comment_icon"
      data-toggle="modal"
      data-target={`#commentform-${props.answerId}`}>
         <span className="h5">
          <i
            className="far fa-comment-dots h8"
          >
          </i>comment</span> 
        </button>
      <div id={`commentform-${props.answerId}`} className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-xs-center">Comment Box</h4>
            </div>
            <div className="modal-body">
              <form  onSubmit={submitHandler}>
                <input type="hidden" name="_token" value="" />
                <div className="form-group">
                  <label className="control-label">Name:</label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      onChange={handelForm}
                      value={newComment.userName}
                      name="userName"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Comment</label>
                  <div id={`comment-${props.answerId}`} />
                </div>

                <div className="form-group">
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>

                    <button type="submit" className="btn btn-info">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
