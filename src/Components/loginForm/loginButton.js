import { motion } from "framer-motion";

const LoginButton = () => {
  return (
    <motion.button href="/"
      whileHover={{ scale: 1.1, backgroundColor: "white", color: "purple"}}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: "purple",
        border: "none",
        borderRadius: "10px",
        padding: "10px 10px",
        fontSize: "1rem",
        fontWeight: 600,
        width: "30%",
        color: "white",
      }}
    >
      Login
    </motion.button>
  );
};
export default LoginButton