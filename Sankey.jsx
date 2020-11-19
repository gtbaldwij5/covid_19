/* eslint-disable */

import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { ResponsiveSankey } from '@nivo/sankey'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({


}));

const data = {
  "nodes": [
    {
      "id": "Federal Funding",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "USDA",
      "color": "hsl(88, 70%, 50%)"
    },
    {
      "id": "DOC",
      "color": "hsl(116, 13%, 23%)"
    },
    {
      "id": "DOD",
      "color": "hsl(260, 70%, 50%)"
    },
    {
      "id": "ED",
      "color": "hsl(202, 70%, 50%)"
    },
    {
      "id": "HHS",
      "color": "hsl(263, 70%, 50%)"
    },
    {
      "id": "DHS",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "HUD",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "DOL",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "DOI",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "DOT",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "EPA",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "NASA",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "NEH",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "NSF",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "Other",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "State of Rhode Island",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "Washington Cty",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "Providence Cty",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "Kent Cty",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "Cranston",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "Kingston",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "Providence",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "Warwick",
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "West Kingston",
      "color": "hsl(311, 70%, 50%)"
    }
  ],
  "links": [
    {
      "source": "Federal Funding",
      "target": "USDA",
      "value": 24
    },
    {
      "source": "Federal Funding",
      "target": "DOC",
      "value": 369
    },
    {
      "source": "Federal Funding",
      "target": "DOD",
      "value": 3
    },
    {
      "source": "Federal Funding",
      "target": "ED",
      "value": 285
    },
    {
      "source": "Federal Funding",
      "target": "HHS",
      "value": 573
    },
    {
      "source": "Federal Funding",
      "target": "DHS",
      "value": 995
    },
    {
      "source": "Federal Funding",
      "target": "HUD",
      "value": 3
    },
    {
      "source": "Federal Funding",
      "target": "DOL",
      "value": 38
    },
    {
      "source": "Federal Funding",
      "target": "DOI",
      "value": 40
    },
    {
      "source": "Federal Funding",
      "target": "DOT",
      "value": 46
    },
    {
      "source": "Federal Funding",
      "target": "EPA",
      "value": 12
    },
    {
      "source": "Federal Funding",
      "target": "NASA",
      "value": 2
    },
    {
      "source": "Federal Funding",
      "target": "NEH",
      "value": 2
    },
    {
      "source": "Federal Funding",
      "target": "NSF",
      "value": 25
    },
    {
      "source": "Federal Funding",
      "target": "Other",
      "value": 5
    },
    {
      "source": "USDA",
      "target": "State of Rhode Island",
      "value": 24
    },  {
      "source": "DOC",
      "target": "State of Rhode Island",
      "value": 369
    },
    {
      "source": "DOD",
      "target": "State of Rhode Island",
      "value": 3
    },
    {
      "source": "ED",
      "target": "State of Rhode Island",
      "value": 285
    },
    {
      "source": "HHS",
      "target": "State of Rhode Island",
      "value": 573
    },
    {
      "source": "DHS",
      "target": "State of Rhode Island",
      "value": 997
    },
    {
      "source": "HUD",
      "target": "State of Rhode Island",
      "value": 3
    },
    {
      "source": "DOL",
      "target": "State of Rhode Island",
      "value": 38
    },
    {
      "source": "DOI",
      "target": "State of Rhode Island",
      "value": 40
    },
    {
      "source": "DOT",
      "target": "State of Rhode Island",
      "value": 46
    },
    {
      "source": "EPA",
      "target": "State of Rhode Island",
      "value": 12
    },
    {
      "source": "NASA",
      "target": "State of Rhode Island",
      "value": 2
    },
    {
      "source": "NEH",
      "target": "State of Rhode Island",
      "value": 2
    },
    {
      "source": "NSF",
      "target": "State of Rhode Island",
      "value": 25
    },
    {
      "source": "Other",
      "target": "State of Rhode Island",
      "value": 5
    },
    {
      "source": "State of Rhode Island",
      "target": "Washington Cty",
      "value": 18
    },
    {
      "source": "State of Rhode Island",
      "target": "Providence Cty",
      "value": 993
    },
    {
      "source": "State of Rhode Island",
      "target": "Kent Cty",
      "value": 492
    },
    {
      "source": "Kent Cty",
      "target": "Warwick",
      "value": 492
    },
    {
      "source": "Providence Cty",
      "target": "Cranston",
      "value": 993
    },
    {
      "source": "Providence Cty",
      "target": "Providence",
      "value": 90
    },
    {
      "source": "Washington Cty",
      "target": "Kingston",
      "value": 18
    },
    {
      "source": "Washington Cty",
      "target": "West Kingston",
      "value": 44
    }
  ]
}

function SankeyWrap(props) {

  const classes = useStyles();

  return (
    <ResponsiveSankey
      data={data}
      margin={{ top: 20, right: 32, bottom: 20, left: 28 }}
      align="center"
      colors={{ scheme: 'category10' }}
      nodeOpacity={1}
      nodeThickness={25}
      nodeInnerPadding={3}
      nodeSpacing={0}
      nodeBorderWidth={1}
      nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
      linkOpacity={0.2}
      linkHoverOpacity={0.8}
      linkHoverOthersOpacity={0.1}
      enableLinkGradient={true}
      labelPosition="outside"
      labelOrientation="vertical"
      labelPadding={16}
      labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
      animate={true}
      motionStiffness={140}
      motionDamping={13}
    />
  )
}

export default SankeyWrap;
