import React, { useState } from 'react';
import Navbar from './Navbar';
import { Box, Typography, Button } from '@mui/material';
import Footer from './Footer';
import img1 from './images/image 4.png'
import img2 from './images/image 5.png'
import img3 from './images/1.png';
import img4 from './images/2.png';
import img5 from './images/3.png';
import img6 from './images/4.png';
import img7 from './images/5.png';
import img8 from './images/6.png';

const Information = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center" marginTop='50px' >
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          HERE TWO BEETLES THAT DAMAGE THE
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          COCONUT TREE ARE MAINLY CONSIDERED
        </Typography>
        <Box display="flex" justifyContent="center" mt={2} sx={{ marginBottom: '20px' }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: activeButton === 'Red' ? 'green' : 'white',
                color: activeButton === 'Red' ? 'white' : 'green',
                border: '1px solid green',
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: 'green',
                  color: 'white',
                  border: '1px solid green',
                }
              }}
              onClick={() => {handleButtonClick('Red')}}
            >
              Red Beetle
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" ml={4}>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: activeButton === 'Black' ? 'green' : 'white',
                color: activeButton === 'Black' ? 'white' : 'green',
                border: '1px solid green',
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: 'green',
                  color: 'white',
                  border: '1px solid green',
                }
              }}
              onClick={() => {handleButtonClick('Black')}}
            >
              Black Beetle
            </Button>
          </Box>
        </Box>
        {(activeButton === 'Red') && (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px',textAlign: 'center' }}>
                Red Beetle Damage & Control
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                The Red Weevil, scientifically known as Rhynchophorus ferrugineus, is the most serious pest of young coconut palms aged 
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
                from 3 to 15 years and is found in all coconut-growing areas of the country.
            </Typography>
            </Box>
            <Box width="100%" marginTop='50px' display="flex" justifyContent="space-between">
                <Box style={{ marginRight: '300px' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginLeft='100px'>
                    Causes of Red Beetle Damage & Control
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '20px' }} marginLeft='100px'>
                    The red weevil lays eggs only on fresh wounds of young palms. Adult weevil does not make wounds on the palm to lay eggs. They are attracted to fresh wounds caused b animals Eg: cattle, wild boar), black beatle and human action. Sometimes fresh wounds (natural cracks) on the growing stem are caused by enlargement of stem and emergence
                    of aerial roots from the bole region of the stem due to high water table.
                    </Typography>
                </Box>
                <Box marginRight='100px' marginBottom='50px'>
                    <img src={img2} alt="Red Beetle" style={{ width: '300px', height: '200px' }} />
                </Box>
            </Box>
            <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginLeft='100px'>
                 Nature of Damage &  Identification
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '20px' }} marginLeft='100px' marginRight='100px'>
                    The damage is caused by the grubs, which are the larval stage of the red weevil. Due to a large population of grubs 
                    feeding on the internal tissues of the trunk, either crown or trunk falls thus killing the palm. Young palms 
                    in the age group of 3-15 years are more prone to the attack and palms with large bases are more susceptible 
                    as the growth of cracks provide suitable sites for egg laying. It is difficult to detect the pest damage in the early 
                    stage of infestation. In most cases it is detected only after the palm has been severely damaged. However, careful observations may 
                    help to detect the presence of the pest. For this purpose it is necessary to clean the crown and the basal region of the palm. 
                    Carefully remove the dried petioles and other debris from the palm without making any fresh injuries. The following 
                    signs could be observed if the pest is present in the palm.
                </Typography>
            </Box>
            <Box marginBottom='50px'>
                <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '20px', marginLeft: '80px', marginRight: '100px' }}>
                    <ul>
                        <li>Holes (1.25-2 cm) are found in the area near the stem or at the base and the gum-like substance has been thrown out through these holes. A brown, viscous liquid often comes out from near the pores and discoloration around the pores.</li>
                        <li>When listening to the trunk, the sound of the larvae eating (crunching noise).</li>
                        <li>Yellowing of leaves.</li>
                        <li>Withering and slanting of bud.</li>
                    </ul>
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '100px',marginBottom:'50px' }}>
                    <img src={img3} alt="" style={{ width: '300px', height: '400px' }} />
                    <img src={img4} alt="" style={{ width: '300px', height: '400px' }} />
                    <img src={img5} alt="" style={{ width: '300px', height: '400px' }} />
            </Box>
            <Box  marginBottom='100px'>
                <Typography variant="h5" sx={{ fontWeight: 'bold',marginLeft:'100px' }} >
                    Prevention of the Pest Damage Nature of Damage &  Identification
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '20px',marginLeft:'100px' }} >
                    Difficulties in early detection of the pest may cause a considerable damage to the
                    infested palm. Therefore, emphasis should be placed on preventive aspects of
                    the pest.
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '20px', marginLeft: '80px', marginRight: '100px' }}>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '10px' }} >Regular inspection of young palms (between 3-15 years of age) should be
                            carried out by trained people to detect any fresh wounds and the presence of
                            red weevil at the early stage.
                        </li>
                        <li style={{ marginBottom: '10px' }}>Coal tar or used engine oil should be applied on fresh wounds on trunks and
                            petioles of all young palms in order to prevent the red weevil from laying
                            eggs.
                        </li>
                        <li style={{ marginBottom: '10px' }}>Stem bleeding in young palms may be followed by red weevil attack. It is
                            therefore, necessary to treat all bleeding wounds with a recommended
                            fungicide.
                        </li>
                        <li style={{ marginBottom: '10px' }}>Some times red weevil attacks palms, which have already been attacked by
                            the black beetle. The red weevil lays eggs on the wounds made by black
                            beetle
                        </li>
                        <li style={{ marginBottom: '10px' }}>An attack on the crown region could be fatal to the palm. It is necessary to
                            prevent the black beetle from breeding in the estates and attacking palms.
                        </li>
                        <li style={{ marginBottom: '10px' }}>Severely damaged palms, which are beyond recovery, should be cut, spilt
                            and burnt. It is essential to uproot the palms completely in order to destroy all
                            the remaining grubs living in the basal region ofthe palm.
                        </li>
                    </ul>
                </Typography>
            </Box>
        </Box>   
        )}
         {(activeButton === 'Black') && (
          
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px',textAlign: 'center' }}>
                    Black Beetle Damage & Control
                </Typography>
            </Box>
            <Box width="100%" marginTop='50px' display="flex" justifyContent="space-between">
                <Box style={{ marginRight: '100px' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold',marginBottom:'20px' }} marginLeft='100px'>
                        The Black beetle or the Rhinoceros beetle,
                        scientifically known as Oryctes rhinoceros is
                        a major pest occurring in all coconut
                        growing areas in Sri Lanka. Although its
                        damage to adult palms is not serious, it
                        causes considerable retardation of growth
                        in young palms and seedlings and
                        occasional death of seedlings.
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginLeft='100px'>
                       Nature of Damage &  Identification
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '20px' }} marginLeft='100px'>
                        The damage is caused by the adult beetle
                        which bores and enters into the soft areas at
                        the base of the bud, continues feeding on
                        the soft tissues, resulting damage to the
                        folded leaves and their petioles. When
                        these leavesunfold they exhibit
                        characteristic geometric cuts. If the
                        damage to the petiole is extensive, breaking
                        of the flag leaf could occur. Also the damage
                        often causes choking of the developing leaves in seedlings, 
                        resulting in the formation of crooked and malformed leaves. The black beetle damage to the growing tip of seedling is fatal.
                    </Typography>
                </Box>
                <Box marginRight='100px' marginBottom='100px'>
                    <img src={img1} alt=" Beetle" style={{ width: '300px', height: '230px' }} />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '100px',marginBottom:'50px' }}>
                    <img src={img6} alt="" style={{ width: '300px', height: '400px' }} />
                    <img src={img7} alt="" style={{ width: '300px', height: '400px' }} />
                    <img src={img8} alt="" style={{ width: '300px', height: '400px' }} />
            </Box>
            <Box  marginBottom='100px'>
                <Typography variant="h5" sx={{ fontWeight: 'bold',marginLeft:'100px' }} >
                   Control of the pest
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '30px',marginLeft:'100px' }} >
                  It is essential to integrate of all possible control measures to control the pest effectively
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '20px', marginLeft: '80px', marginRight: '100px' }}>
                <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '20px' }}>
                        <div>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold',marginBottom:'5px' }}>01. Mechanical method</Typography>
                            <Typography variant="bold">Seedling and young plantations should be
                                                        examined frequently for black beetle damage.The chewed up fibrous matter or 'frass' at the
                                                        base of the bud and around the entry hole are
                                                        indicauons of the damage. It is likely that adult
                                                        beetle is inside the bud if fresh frass is present
                                                        at the entrance hole. In such instance, the
                                                        beetle should be removed using a pointed
                                                        metal hook. This method is
                                                        compulsory for the young plantations located
                                                        near fiber mills, saw dust heaps and coconut
                                                        rafter processing centers.
                            </Typography>
                        </div>
                    </li>
                    <li style={{ marginBottom: '20px' }}>
                        <div>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold',marginBottom:'5px' }}>02. Cultural Methods</Typography>
                            <Typography variant="bold">Decaying coconut logs and stumps should be removed and burnt. The breeding
                                                        media such as organic manure heaps and Coir dust heaps should
                                                        be properly disposed or should be well earthed up with the soil, if using as
                                                        manure. Beetle could also bread in small numbers on the decaying husk and coconut leaves used for mulching of
                                                        coconut seedlings. The mulch should
                                                        be periodically checked and remove
                                                        grubs or replaced with fresh
                                                        materials.
                            </Typography>
                        </div>
                    </li>
                    <li style={{ marginBottom: '50px' }}>
                        <div>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold',marginBottom:'5px' }}>03. Chemical Methods </Typography>
                            <Typography variant="bold">
                                <ul>
                                    <li style={{ marginBottom: '10px' }}>To repel beetles, apply coal tar or used engine oil on leaf axils around the bud region. Repeat at 1 - 2 month intervals. It is important to use used engine oil not mixed with kerosene oil. Do not pour engine oil into the bud.</li>
                                    <li style={{ marginBottom: '10px' }}>Place naphthalene balls into each of the innermost leaf axils. (6 balls per palm/seedling). This method is more suitable for home gardens.</li>
                                    <li >If the black beetle damage is severe, a systemic granular insecticide should be applied to kill beetles.</li>
                                </ul>
                            </Typography>

                        </div>
                    </li>
                    
                 </ul>
                </Typography>
                <Box>
                  <Typography variant="bold" sx={{ marginLeft: '100px', fontWeight: 'bold' }}>
                      Recommended insecticides and their dosages are as follows:
                      </Typography>
                      <Typography sx={{ marginLeft: '100px', fontWeight: 'bold', fontSize: 'small' ,marginBottom:'50px'}}>
                      <ul>
                        <li style={{ marginBottom: '10px' }}>Carbofuran 3% at the rate of 15 g and 30 g for seedlings and young palms respectively.</li>
                        <li style={{ marginBottom: '10px' }}>Carbosulfan 10% at the rate of 10 g and 15 g for seedlings and young palms respectively.</li>
                      </ul>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="bold" sx={{ marginLeft: '100px', fontWeight: 'bold' }}>
                  Method of application
                  </Typography>
                  <Typography sx={{ marginLeft: '100px', fontWeight: 'bold', fontSize: 'small' }}>
                      <ul>
                        <li style={{ marginBottom: '10px' }}>Mix the recommended dosage of one of the granular insecticides with equal
                                                             amount of sand and placed the mixture into the leaf axils around the bud. 
                                                             Repeatments at monthl intervals.
                        </li>
                        <li style={{ marginBottom: '10px' }}>Carbofuran is sold in many trade names such as Furadan G, Curator, and
                                                             Carbofuran 3 G and Carbosulfan as Suscon and Marshal.
                        </li>
                      </ul>
                  </Typography>
                </Box>
            </Box>
          </Box>   
          
        )}
        <Box display={(activeButton === 'Red' || activeButton === 'Black') ? 'none' : 'flex'} justifyContent="center" mt={4} marginBottom='20px'>
          <img src={img2} alt="Red Beetle" style={{ width: '200px', height: '200px', marginRight: '20px', display: activeButton ? 'none' : 'block' }} />
          <img src={img1} alt="Black Beetle" style={{ width: '200px', height: '200px', display: activeButton ? 'none' : 'block' }} />
        </Box>
      </Box>
      <Footer />
    </div>
  )
}

export default Information;
