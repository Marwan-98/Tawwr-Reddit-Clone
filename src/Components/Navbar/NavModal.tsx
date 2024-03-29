import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { useFormik } from "formik";
import * as Yup from "yup";
import { showPost } from "../../API/api";
import { useSelector } from "react-redux";
import { AppProps } from "../../utils/typs";

type Props = {
  showPosts: Function;
  show: boolean;
  setShow: Function;
  handleClose: Function;
};

export default function NavModal({
  showPosts,
  show,
  setShow,
  handleClose,
}: Props) {
  const tags = useSelector((state: AppProps) => state.tags);

  const addPost = (title: string, description: string, tags: Number[]) => {
    showPost(title, description, tags).then(() => {
      showPosts();
    });
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      userId: "",
      tags: [],
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title is required")
        .max(40, "limit passed")
        .min(20, "Please write 20 characters or more"),
      description: Yup.string()
        .required("your message is required")
        .min(20, "Please write 20 characters or more"),
    }),
    onSubmit: ({title, description, tags}) => {
      addPost(title, description, tags);
      setShow(false);
      formik.resetForm();
    },
  });

  return (
    <Modal
      show={show}
      onHide={() => handleClose()}
      backdrop="static"
      keyboard={false}
    >
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Your Next Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              id="title"
              name="title"
              value={formik.values.title}
              type="text"
              placeholder="Add Title"
              onChange={formik.handleChange}
              onBlur={formik.handleChange}
            />
            {formik.touched.title && formik.errors.title && (
              <Alert variant="danger">{formik.errors.title}</Alert>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              id="description"
              name="description"
              value={formik.values.description}
              as="textarea"
              aria-label="With textarea"
              placeholder="write post"
              onChange={formik.handleChange}
              onBlur={formik.handleChange}
            />
            {formik.touched.description && formik.errors.description && (
              <Alert variant="danger">{formik.errors.description}</Alert>
            )}{" "}
          </Form.Group>
          <Form.Group role="group" aria-labelledby="checkbox-group">
            {tags.map((tag) => (
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label={tag.name}
                  value={+tag.id}
                  key={tag.id}
                  name="tags"
                  onChange={formik.handleChange}
                />
            ))}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Submit</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
