import React from "react";

const Component = () => {
	return (
		<div className="panel no-border  no-margin">
			<div className="padding-15">
				<div className="item-header clearfix">
					<div className="thumbnail-wrapper d32 circular">
						<img
							width="40"
							height="40"
							src="../assets/img/profiles/3x.jpg"
							data-src="../assets/img/profiles/3.jpg"
							data-src-retina="assets/img/profiles/3x.jpg"
							alt=""
						/>
					</div>
					<div className="inline m-l-10">
						<p className="no-margin">
							<strong>Anne Simons</strong>
						</p>
						<p className="no-margin hint-text">
							Shared a link
							<span className="location semi-bold">
								<i className="fa fa-map-marker"></i> NY center
							</span>
						</p>
					</div>
				</div>
			</div>
			<hr className="no-margin" />
			<div className="padding-15">
				<p>Inspired by : good design is obvious, great design is transparent</p>
				<div className="hint-text">via themeforest</div>
			</div>
			<div className="relative">
				<ul className="buttons pull-top top-right list-inline p-r-10 p-t-10">
					<li>
						<a className="text-white" href="#">
							<i className="fa fa-expand"></i>
						</a>
					</li>
					<li>
						<a className="text-white" href="#">
							<i className="fa fa-heart-o"></i>
						</a>
					</li>
				</ul>
				<div className="widget-19-post no-overflow">
					<img
						src="../assets/img/social-post-image.png"
						className="block center-margin relative"
						alt="Post"
					/>
				</div>
			</div>
			<div className="padding-15">
				<div className="hint-text pull-left">few seconds ago</div>
				<ul className="list-inline pull-right no-margin">
					<li>
						<a className="text-master hint-text" href="#">
							5,345 <i className="fa fa-comment-o"></i>
						</a>
					</li>
					<li>
						<a className="text-master hint-text" href="#">
							23K <i className="fa fa-heart-o"></i>
						</a>
					</li>
				</ul>
				<div className="clearfix"></div>
			</div>
		</div>
	);
};

export default Component;
