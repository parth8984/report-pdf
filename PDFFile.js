import React from "react";
import { Page, Text, Document, StyleSheet, Image, View } from "@react-pdf/renderer";
import { Font } from '@react-pdf/renderer';

// Import your font
import MyCustomFont from '../fonts/Anton-Regular.ttf';

// Register the font
Font.register({
  family: 'Anton',
  src: MyCustomFont
});

const styles = StyleSheet.create({
  page: {
    padding: 20,
    border: "1px solid black", // Add border style here
  },
  maindiv: {
    border: "1px solid black",
    width: '100%',
    height:'99%'
  },
  watermark: {
 marginTop:'50%',
 marginLeft:'30%',
    textAlign:'center',
    position: 'absolute',
    opacity: 0.1,
    transform: 'rotate(-45deg)',
    fontSize: 40,
    color: 'gray',
    zIndex: 9999,
  },
  title: {
    margin: 20,
    fontSize: 14,
    textAlign: "justify",
    color: "blue",
    marginTop: 30,
    paddingBottom: '5px',
    borderBottom: '1.5px solid blue',
    fontWeight: 'bold', // Make the title bold
  },
  title2:{
    marginTop:'-30px',
    marginBottom:'25px',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 14,
    textAlign: "justify",
    color: "blue",
    paddingBottom: '5px',
    borderBottom: '1.5px solid blue',
    fontWeight: 'bold', // Make the title bold
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    color: "blue",
  },
  header: {
    fontSize: 12,
    textAlign: "center",
    color: "black",
    width: '100%',
    height: "60px",
    borderCollapse: "collapse",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRight: "1px solid black",
    paddingRight: '1px'
  },
  tableCell3: {
    flex: 1,
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRight: "none",
    paddingRight: '1px'
  },
  tableRow1: {
    flexDirection: "row",
    textAlign: 'center',
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  },
  tableCell1: {
    borderRight: "1px solid black",
    flex: 1,
    padding: 18,
    paddingLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 14,
  },
  tableCell2: {
    border: "1px solid black",
    width: '150px',
    height: '60px',
    border: "1px solid black",
  },
  pageNumber: {
 marginTop:'5px',
textAlign: "center",
fontSize:'10px',
    
  },
  leftdiv: {
    marginTop:'8px',
    width: '95%',
    display: 'flex',
    fontSize: '10px',
    paddingBottom:'25px',
    marginLeft:'25px',
    // marginBottom:'20px',
  },
 
leftAlignedText:{
    marginLeft:'5%',
   marginBottom:'30px',
}
});

const Watermark = ({ text }) => (
    <View style={styles.watermark}>
      <Text>{text}</Text>
    </View>
  );
  

const PDFFile = () => {
  const pages = [
    {
      title: 'General Information',
      text: 'This is the general information page.',
      backgroundColor: 'white',
      title2: 'Incident Details',
      leftAlignedText:'Initiator',   
leftAlignedText1:'Initiator Initiator Group  ',   
leftAlignedText2:'Short Description ',   
leftAlignedText3:'Due Date',   
leftAlignedText4:'Other Ref.Doc.No ',   
leftAlignedText5:'Invocation Type',   
leftAlignedText6:'Initial Attachment ',
leftAlignedText7:'Incident Details',
leftAlignedTextA:'Date Initiation',
leftAlignedTextB:'Initiator Group Code',
leftAlignedTextE:'Incident Category',
leftAlignedText8:'Document Details ',  
leftAlignedText9:'Instrument Details',   
leftAlignedText10:'Involved Personnel',   
leftAlignedText11:'Product Details,If Any',   
leftAlignedText12:'Supervisor Review Comments',   
leftAlignedText13:'Cancelation Remarks',   
},
   {
    title: 'Investigation Details',
    text: 'This is the second page.',
    backgroundColor: 'white',
    title2: 'Attachments',
    leftAlignedText:'Investigation Details ',   
    leftAlignedText1:'Action Taken',   
    leftAlignedText2:'Currective Action',   
    leftAlignedText3:'QA Review Comments',   
    leftAlignedText4:'Effectiveness Check required? ',   
    leftAlignedText5:'Conclusion',   
    leftAlignedTextB:'Root Cause',
    leftAlignedTextC:'Preventive Action ',
    leftAlignedTextD:'QA Head/Designee Comments',
    leftAlignedTextE:'Incident Types',

    leftAlignedText8:'Initial Attachment ',  
    leftAlignedText9:'Attachment',   
    leftAlignedText10:'Inv Attachment',   
    leftAlignedText11:'CAPA Attachment',   
    },
  
  ];

  return (
    <Document>
      {pages.map((page, index) => (
        <Page key={index} style={{ ...styles.page, backgroundColor: page.backgroundColor }}>
          <Watermark
            fit="scale"
            opacity={0.1}
            content="Life link digital"
            fontSize={40}
            color="gray"
            angle={45}
            x={200}
            y={300}
          />
          <View style={styles.maindiv}>
             <Watermark text="Life link digital" />
            <View style={styles.header}>
              <View style={styles.tableRow1}>
                <Text style={styles.tableCell1}><Text style={{ margin: '20px', fontSize: '20px', textAlign: 'center' }}>Incident Single Report</Text> </Text>
                <Image style={{ ...styles.tableCell2, }} src='./lifelinklogo.jpg' />
              </View>
            </View>
            <View style={styles.table}>
           
              <View style={styles.tableRow}>
                <View style={styles.tableCell}><Text style={{ fontSize: '12px' }}>Lab Incident No.</Text></View>
                <View style={styles.tableCell}><Text style={{ fontSize: '12px' }}>Jordan/2024/0012</Text></View>  
                <View style={styles.tableCell3}><Text style={{ fontSize: '12px' }}>Record No. 0012</Text></View>
              </View>
            </View>
            <Text style={styles.title}>{page.title}</Text>
            <View style={styles.leftdiv}>
                <Text  style={styles.leftAlignedText} >{page.leftAlignedText}                                                                              <Text>{page.leftAlignedTextA} </Text></Text>
                <Text  style={styles.leftAlignedText}>{page.leftAlignedText1}                                                            <Text>{page.leftAlignedTextB} </Text></Text> 
                <Text  style={styles.leftAlignedText} >{page.leftAlignedText2}     <Text>{page.leftAlignedTextC} </Text> </Text>
                <Text  style={styles.leftAlignedText}>{page.leftAlignedText3}                <Text>{page.leftAlignedTextD} </Text></Text>
                <Text  style={styles.leftAlignedText}> {page.leftAlignedText4}                                                                    <Text>{page.leftAlignedTextE} </Text>  </Text> 
                <Text  style={styles.leftAlignedText}>{page.leftAlignedText5}     <Text>{page.leftAlignedTextF} </Text> </Text>
                <Text  style={styles.leftAlignedText}>{page.leftAlignedText6}     <Text>{page.leftAlignedTextG} </Text></Text>
                <Text  style={styles.leftAlignedText}>{page.leftAlignedText7}      <Text>{page.leftAlignedTextH} </Text></Text> 
            </View>
             <Text style={styles.title2}>{page.title2}</Text>
            <View style={styles.leftdiv}>
            <Text  style={styles.leftAlignedText}>{page.leftAlignedText8} </Text>
                <Text  style={styles.leftAlignedText}>{page.leftAlignedText9} </Text>
                <Text  style={styles.leftAlignedText}>{page.leftAlignedText10} </Text>
                <Text  style={styles.leftAlignedText}>{page.leftAlignedText11} </Text>
                <Text  style={styles.leftAlignedText}>{page.leftAlignedText12} </Text>
                <Text  style={styles.leftAlignedText}>{page.leftAlignedText13} </Text>
                </View>  
               
          </View>
          <View>

          </View>
          <Text
            style={styles.pageNumber}

            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </Page>
      ))}
    </Document>
  );
};

export default PDFFile;
