import PropTypes from "prop-types";

const InlineCode = ({ content }) => {
    return <code className="px-1 text-red-600 bg-orange-100">{content}</code>;
};

InlineCode.propTypes = {
    content: PropTypes.string.isRequired,
};

export default InlineCode;
