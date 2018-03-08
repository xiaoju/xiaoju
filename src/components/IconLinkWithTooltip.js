import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';

function IconLinkWithTooltip({
  id,
  href,
  tooltip,
  placement,
  srcIcon,
  height,
  alt,
  style
}) {
  return (
    <OverlayTrigger
      overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
      placement={placement}
      delayShow={150}
      delayHide={80}
    >
      <a href={href}>
        <img src={srcIcon} height={height} alt={alt} style={style} />
      </a>
    </OverlayTrigger>
  );
}
export default IconLinkWithTooltip;

IconLinkWithTooltip.propTypes = {
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  srcIcon: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
};
