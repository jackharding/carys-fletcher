import { css } from 'styled-components';

export default css`
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    position: relative;
    overflow: hidden;
    display: block;
    margin: 0;
    padding: 0;

    &:focus {
      outline: none;
    }

    &.dragging {
      cursor: pointer;
      cursor: hand;
    }
  }
  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    left: 0;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;

    &:before,
    &:after {
      content: "";
      display: table;
    }

    &:after {
      clear: both;
    }

    .slick-loading & {
      visibility: hidden;
    }
  }
  .slick-slide {
    float: left;
    height: 100%;
    min-height: 1px;
    [dir="rtl"] & {
      float: right;
    }
    img {
      display: block;
    }
    &.slick-loading img {
      display: none;
    }

    display: none;

    &.dragging img {
      pointer-events: none;
    }

    .slick-initialized & {
      display: block;
    }

    .slick-loading & {
      visibility: hidden;
    }

    .slick-vertical & {
      display: block;
      height: auto;
      border: 1px solid transparent;
    }
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-dots {
    display: flex!important;
    justify-content: center;
    padding: 0;
    margin-top: 15px;
    list-style: none;

    li {
      button {
        width: 0;
        height: 0;
        padding: 7px;
        border: 0;
        border-radius: 50%;
        background: ${({ theme }) => theme.color.disabled};
        cursor: pointer;
        text-indent: -9999px;

        &:focus {
          outline: 2px solid transparent;
          box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.color.brandDarker};
        }
      }

      &.slick-active {
        button {
          background: ${({ theme }) => theme.color.brandDarker};
        }
      }
      
      +* {
        margin-left: 7px;
      }
    }
  }
`;