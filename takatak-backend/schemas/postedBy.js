export default {
  name: "postedBy",
  title: "Posted By",
  type: "reference", // Bcz it's connects to different documents
  to: [{ type: "user" }], // reference of the document
};
