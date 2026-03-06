function Footer() {
    return (
      <footer style={styles.footer}>
        <p>Desenvolvido por Lucas Gonçalves Neves © 2026</p>
        <p>Facebook | Instagram | LinkedIn</p>
      </footer>
    )
  }
  
  const styles = {
    footer: {
      marginTop: "40px",
      padding: "20px",
      background: "#222",
      color: "white",
      textAlign: "center"
    }
  }
  export default Footer