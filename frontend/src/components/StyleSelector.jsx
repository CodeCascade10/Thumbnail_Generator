const styles = [
  { name: "MrBeast", value: "mrbeast" },
  { name: "PewDiePie", value: "pewdiepie" },
  { name: "Sidemen", value: "sidemen" },
  { name: "MKBHD", value: "mkbhd" },

  { name: "CarryMinati", value: "carryminati" },
  { name: "BB Ki Vines", value: "bbkivines" },
  { name: "Tech Burner", value: "techburner" },
  { name: "Technical Guruji", value: "technicalguruji" },

  { name: "Gaming", value: "gaming" },
  { name: "Education", value: "education" },
  { name: "Finance", value: "finance" }
];

function StyleSelector({ style, setStyle }) {
  return (
    <div className="style-grid">
      {styles.map((item) => (
        <button
          key={item.value}
          className={`style-card ${style === item.value ? "active" : ""}`}
          onClick={() => setStyle(item.value)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default StyleSelector;

