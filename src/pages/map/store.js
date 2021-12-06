import { Dialog, DialogTitle, makeStyles } from "@material-ui/core";
import { CATEGORIES, FILTERS, WORLDFODDS } from "../../configs/data"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useState, useRef } from "react";
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import clsx from 'clsx';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { AtomStore } from "../../components/atom.store";
import { IMAGES } from "../../configs/images";

const useStyles = makeStyles(() => ({
  mapList: {
    marginTop: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 'calc(100% - 230px)',
    '@media (max-width: 830px)': {
      width: '100%',
      marginTop: 0,
      overflow: 'hidden',
      height: 'auto'
    },
    '@media (max-width: 450px)': {
      flexWrap: 'nowrap',
      overflowX: 'auto',
      justifyContent: 'flex-start',
    },
  },
  relative: {
    position: 'relative',
    width: '100%',
  },
  mapContainer: {
    zIndex: 100,
    position: 'absolute',
    width: 480,
    height: ({ full }) => full ? 'auto' : 'calc(100% - 90px)',
    background: '#fff',
    padding: '0px 20px 0 20px',
    '@media (max-width: 1300px)': {
      width: 440
    },
    '@media (max-width: 830px)': {
      width: 'calc(100% - 40px)',
      position: 'relative'
    },
  },
  mapProduct: {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    marginTop: 20,
    '& img': {
      width: ({ full }) => full ? 100 : 130,
      height: ({ full }) => full ? 100 : 130,
      borderRadius: 8,
      background: 'crimson',
      '@media (max-width: 830px)': {
        width: ({ full }) => full ? 90 : 90,
        height: ({ full }) => full ? 90 : 90
      },
    }
  },
  resetText: {
    color: '#11c856',
    fontWeight: 700,
    fontSize: 12,
    marginTop: 1
  },
  filterModalIcon: {
    color: '#11c856',
    fontSize: 22
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
  box: {
    background: '#F7F8FC',
    width: 64,
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  mapFilter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    color: '#888',
    fontSize: 14,
    marginTop: 5,
    width: 300,
    '@media (max-width: 630px)': {
      width: 250,
    },
  },
  mapFilterTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: '#313331',
    lineHeight: 1,
    marginTop: 10,
    marginBottom: 4
  },
  doneIcon: {
    color: '#11c856',
    position: 'absolute',
    right: 0
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    cursor: 'pointer'
  },
  text: {
    textAlign: 'center'
  },
  dialog: {
    height: 'calc(100% - 200px)',
    marginTop: '5%',
    '@media (max-width: 830px)': {
      height: 'calc(100% - 80px)',
      marginTop: '7%',
    },
  },
  mapFull: {
    width: 'calc(100% - 40px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  mapProductFull: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: 200,
    '@media (max-width: 480px)': {
      width: 140,
    },
  },
}))

export function Store(props) {

  const { full, isProduct, onDelivery } = props;
  const classes = useStyles({ full, isProduct });
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const category = CATEGORIES.find(item => item.cId === selectedCategory);
  const categoryTitle = category ? category.title : ''
  const categorySub = category ? category.sub : ''
  const [select, setSelect] = useState(0);
  const scrollRef = useRef();

  const onSelectCategory = (e) => {
    setSelect(select === e ? 0 : e);
  }

  const categorySelect = (e) => {
    setSelectedCategory(e);
    onDelivery(e);
  }

  const onArrowScroll = (e) => {
    if (!scrollRef.current) return false;
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + e
  }

  return (
    <div className={clsx(classes.mapContainer, full && classes.mapFull)}>

      {(!selectedCategory || categorySub.length > 0 ) && <div className='relative'>
        <div className='absolute top60 right0'>
          <div className='bg-white circle32'>
            <ChevronRightIcon className='green' onClick={() => onArrowScroll(100)} />
          </div>
        </div>
        <div className='absolute top60 left0'>
          <div className='bg-white circle32'>
            <ChevronLeftIcon className='green' onClick={() => onArrowScroll(-100)} />
          </div>
        </div>
      </div>}

      {!selectedCategory &&
        <div className='row overflowX hidden' ref={scrollRef}>
          {[{
            cId: null,
            title: 'All',
            image: IMAGES.IconAllCategory
          }, ...CATEGORIES].map((item, index) =>
            <div
              key={index}
              className='center justify-start'
              style={{ minWidth: 110, textDecoration: 'none' }}
              onClick={() => categorySelect(item.cId)}
            >
              <div className="circle60">
                <img src={item.image} alt={'icon'} style={{ width: 50 }} />
              </div>
              <div className='text-center mt10 mb10'>{item.title}</div>
            </div>)}
        </div>}

      <div className='row align-center mt20'>
        <ArrowBackIcon className='center cursor' onClick={() => categorySelect(null)} />
        {!categoryTitle && <span className='text36 ml20'>Popular near you</span>}
        {categoryTitle && <div className='text24 ml20 mt-5'>{categoryTitle}</div>}
      </div>

      {categorySub.length > 0 && <div className='mt20 row overflowX hidden' ref={scrollRef}>
        {[{ title: 'All' }, ...categorySub].map((item, index) =>
          <div
            className={`text18 ${select === index ? 'opacity1' : 'opacity25'} mr20 cursor pb10 `}
            key={index}
            style={{ whiteSpace: 'nowrap' }}
            onClick={() => onSelectCategory(index)}
          >
            {item.title}
          </div>)}
      </div>}

      <div className={classes.mapList}>
        {WORLDFODDS.map((item, index) =>
          <AtomStore
            key={index}
            item={item}
          />
        )}
      </div>

      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        className={classes.dialog}
      >
        <div style={{ padding: '20px 10px' }}>
          <CloseIcon className={classes.closeIcon} onClick={() => setOpen(false)} />

          <p className={classes.resetText}>Reset All</p>
          <div className={classes.center}>
            <div className={classes.box}>
              <FilterListIcon className={classes.filterModalIcon} />
            </div>
          </div>
          <DialogTitle className={classes.text}>Filters</DialogTitle>

          {FILTERS.map((item, index) =>
            <div className={classes.mapFilter} key={index}>
              <img src={item.image} alt="filter icon" />
              <div>
                <div className={classes.mapFilterTitle}>{item.title}</div>
                <div>{item.products} products</div>
              </div>
              <DoneIcon className={classes.doneIcon} />
            </div>)}
        </div>
      </Dialog>

    </div>
  );
}