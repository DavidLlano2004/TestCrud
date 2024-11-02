export const customStylesSelect = {
    option: (provided, state) => ({
        ...provided,
        padding: "8px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        height: "30%",
    }),
    singleValue: (provided) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
        gap: "8px",
    }),
    control: (provided) => ({
        ...provided,
        width: "fit-content",
        padding: "6px 2px",
        borderRadius: "6px",
        border: "1px solid #BDBDBD",
        whiteSpace: "nowrap",
        minWidth: "100%",
        maxWidth: "100%",
        height: "auto",
    }),
    menu: (provided) => ({
        ...provided,
        animation: "fadeIn 0.2s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0 , top:0 },
          to: { opacity: 1 , top:4 },
        },
     }),
};

export const filterOptions = (candidate, input) => {
    const candidateLabel = candidate?.data?.label;
    const inputValue = input?.toLowerCase();

    if (typeof candidateLabel === "string") {
        return candidateLabel.toLowerCase().includes(inputValue);
    }

    return false;
};