import { makeStyles } from '@material-ui/core';
import Footer from '../components/foot.product';
import { HeaderMap } from '../components/header.map';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import { FOODSPRODUCTS2 } from '../configs/data';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import clsx from 'clsx';
import { useState } from 'react'
import { InputTag } from '../components/input.tag';
import { AtomProduct } from '../components/atom.product';
import { ModalStoreInfo } from '../components/modal.storeInfo';
import { IMAGES } from '../configs/images';

const useStyles = makeStyles(() => ({
  container: {
    padding: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 80
  },
  main: {
    width: 1200,
    '@media (max-width: 1200px)': {
      width: 800,
    },
    '@media (max-width: 870px)': {
      width: '100%',
    },
  },
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
    width: 1200,
    '@media (max-width: 1200px)': {
      width: 800,
    },
    '@media (max-width: 870px)': {
      width: '100%',
    },
  },
  box: {
    padding: 20,
    background: '#FFFFFF',
    boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.08)',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  bgImg: {
    zIndex: -1,
    top: 0,
    position: 'absolute',
    width: '100%',
    backgroundImage: "url(" + IMAGES.BgHeader + ")",
    height: 480,
    backgroundRepeat: 'no-repeat',
  },
  titleLogo: {
    width: 158,
    height: 158,
    borderRadius: 20,
    '@media (max-width: 630px)': {
      width: 100,
      height: 100,
      marginRight: -20
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 2,
    '@media (max-width: 870px)': {
      fontSize: 25,
      lineHeight: 1
    },
  },
  title2: {
    fontSize: 18,
    fontWeight: '500',
    color: '#7c7b8a',
    marginBottom: 10
  },
  breadcrumb: {
    marginTop: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 18
  },
  mapFilterBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    width: 50,
    height: 48,
    borderRadius: 24,
    boxShadow: '0px 5px 9px -1px rgba(0,0,0,0.25)',
    cursor: 'pointer',
  },
  search: {
    color: '#11c856',
    position: 'absolute',
    right: 40,
    top: 13,
    cursor: 'pointer'
  },
  relative: {
    position: 'relative',
    width: '100%',
  },
  mapRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30
  },
  hidden: {
    display: 'block',
    '@media (max-width: 850px)': {
      display: 'none',
    },
  },
  shidden: {
    display: 'block',
    '@media (max-width: 510px)': {
      display: 'none',
    },
  },
  btn: {
    background: '#11c856',
    padding: '4px 12px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.16)',
    borderRadius: 4,
    cursor: 'pointer',
    color: '#fff'
  },
  dBtn: {
    padding: '4px 12px',
    background: '#FFFFFF',
    border: '2px solid #EAEFF5',
    boxSizing: 'border-box',
    borderRadius: 4,
    cursor: 'not-allowed',
    color: '#313131'
  },
  fruitText: {
    fontSize: 24,
    fontWeight: '700',
    '@media (max-width: 850px)': {
      fontSize: 17,
    },
  },
  searchTitle: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold'
  }
}))

export function StoreInfo() {

  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [full, setFull] = useState(false);
  const [tags, setTags] = useState([])
  const [open, setOpen] = useState(false);

  const onTags = (e) => {
    setTags(e);
    setFull(true);
  }

  return (
    <div className={classes.root}>
      <HeaderMap transparent={true} />
      <div className={classes.bgImg} />
      <div className={classes.container}>
        <div className={classes.main}>
          <div className={classes.box}>
            <img src={IMAGES.Img1LogoStore} alt={'logo'} className={classes.titleLogo} />
            <div style={{ marginLeft: 40 }}>
              <div className={classes.title}>Whole Foods</div>
              <div className={classes.title2}>We're here for you, Portland</div>
              <div className={classes.row}>
                <span>4.6</span> &nbsp;&nbsp;&nbsp;
                <div className={classes.row}>
                  <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
                  <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
                  <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
                  <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
                  <img src={IMAGES.IconHalfStarProduct} alt={'star icon'} />
                </div>
              </div>
            </div>
          </div>

          <div className={classes.breadcrumb}>
            <div className={classes.row}>
              <div className={classes.row}>
                <img src={IMAGES.IconDeliveryProduct} alt={'delivery'} />&nbsp;&nbsp;
                <span style={{ color: '#313131', fontSize: 17, fontWeight: '600' }} className={classes.shidden}>Next Delivery: </span> &nbsp;
                <span style={{ color: '#7c7b8a' }} className={classes.hidden}>Today 11 AM</span>&nbsp;&nbsp;
                <KeyboardArrowRightIcon style={{ color: '#7c7b8a', fontSize: 18 }} />
              </div>
              <div className={classes.row} style={{ marginLeft: 20 }}>
                <img src={IMAGES.IconTimeFiveProduct} alt={'delivery'} />&nbsp;&nbsp;
                <span style={{ color: '#313131', fontSize: 17, fontWeight: '600' }} className={classes.shidden}>Open: </span> &nbsp;
                <span style={{ color: '#7c7b8a' }} className={classes.hidden}>Until 5:30 PM</span>&nbsp;&nbsp;
                <KeyboardArrowRightIcon style={{ color: '#7c7b8a', fontSize: 18 }} />
              </div>
            </div>
            <div className={classes.row} style={{ color: '#0AB074', cursor: 'pointer', textDecoration: 'none' }} onClick={() => setOpen(true)}>Store Info &nbsp; <ChevronRightIcon /></div>
          </div>

          <div className={classes.mapRow}>
            <div className={classes.relative}>
              <InputTag onTags={onTags} />
              <SearchIcon className={classes.search} />
            </div>
            <div className={classes.mapFilterBtn}>
              <FilterListIcon />
            </div>
          </div>

          {tags.length > 0 && <div className={classes.searchTitle}>
            {FOODSPRODUCTS2.filter((item, index) => tags.length > 0 && (
              item.title.toLocaleLowerCase().includes(tags[0]?.toLocaleLowerCase()) ||
              item.title.toLocaleLowerCase().includes(tags[1]?.toLocaleLowerCase()) ||
              item.title.toLocaleLowerCase().includes(tags[2]?.toLocaleLowerCase()) ||
              item.title.toLocaleLowerCase().includes(tags[3]?.toLocaleLowerCase()) ||
              item.title.toLocaleLowerCase().includes(tags[4]?.toLocaleLowerCase())
            )).length}
            &nbsp; search results</div>}

          {tags.length === 0 && <div className={classes.breadcrumb} style={{ marginTop: 50 }}>
            <div className={classes.row}>
              <img src={IMAGES.ImgFruitsCategory} alt={'delivery'} />&nbsp;&nbsp;
              <div className={classes.fruitText}>Fruits & Vegetables</div>
            </div>
            <div
              className={classes.row}
              style={{ color: '#0AB074', cursor: 'pointer', textDecoration: 'none' }}
              onClick={() => setFull(!full)}
            >
              View {full ? 'Less' : 'All'} &nbsp; <ChevronRightIcon />
            </div>
          </div>}

        </div>

        <div className={classes.products}>
          {FOODSPRODUCTS2
            .filter((item, index) => !full ? (index < (page + 1) * 12) && (index >= page * 12) : {})
            .filter((item, index) => tags.length > 0 ? (
              item.title.toLocaleLowerCase().includes(tags[0]?.toLocaleLowerCase()) ||
              item.title.toLocaleLowerCase().includes(tags[1]?.toLocaleLowerCase()) ||
              item.title.toLocaleLowerCase().includes(tags[2]?.toLocaleLowerCase()) ||
              item.title.toLocaleLowerCase().includes(tags[3]?.toLocaleLowerCase()) ||
              item.title.toLocaleLowerCase().includes(tags[4]?.toLocaleLowerCase())
            ) : {})
            .map((item, index) =>
              <AtomProduct item={item} key={index} />
            )}
        </div>

        {!full && <div className={clsx(classes.main, classes.row)} style={{ marginTop: 30 }}>
          <div className={clsx(page < 2 && classes.dBtn, page > 1 && classes.btn)} onClick={() => page > 1 && setPage(page - 1)}><KeyboardBackspaceIcon style={{}} /></div>
          <div style={{ margin: '0 20px' }}>{page} of 8</div>
          <div className={clsx(page > 7 && classes.dBtn, page < 8 && classes.btn)} onClick={() => page < 8 && setPage(page + 1)}><ArrowRightAltIcon /></div>
        </div>}

        <ModalStoreInfo
          onClose={() => setOpen(false)}
          open={open}
        />

        <div className='full'>
          <Footer />
        </div>

      </div>
    </div>
  );
}