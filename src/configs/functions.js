import { makeStyles } from "@material-ui/core";

export const inputStyles = makeStyles(() => ({
    underline: {
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
    },
    input: {
      fontSize: 16,
      '@media (max-width: 630px)': {
        fontSize: 12,
      },
    }
  }))