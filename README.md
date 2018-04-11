# yuzhuaCollection
收集的一些东西

这是一个滚动慢慢消失的代码段

<div class="scrolling">
				<div class="bd">
					<ul class="rolling">
						<li>
							商标猎头帮用户628123，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户62845，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户6453，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户627843，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户64543，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户6288943，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户628123，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户62845，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户6453，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户627843，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户64543，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户6288943，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户628123，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户62845，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户6453，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户627843，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户64543，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户6288943，找到了用户4583162
						</li>
					</ul>
				</div>
			</div>
			<script>
				        //底部消息滚动
		        function singleDong(obj) {
		            $(obj).fadeIn(200).animate({
		                opacity: '0',
		                filter: 'alpha(opaicty=0)'
		            }, 2800, 'swing', function () {
		                $(this).css({
		                    opacity: '1',
		                    filter: 'alpha(opaicty=100)',
		                    visibility: "hidden"
		                });
		            })
		        }
                jQuery(".scrolling").slide({
                    mainCell: ".bd ul",
		            autoPlay: true,
		            effect: "topMarquee",
		            interTime: 30,
		            mouseOverStop:false,
		            easing: "easeOutCubic",
		            // vis:2,
		            startFun: function (i, c) {

		                var a = $(".scrolling").offset().top;
		                $(".rolling li").each(function () {
		                    var b = $(this).offset().top - a;
		                    if (b == 45) {
		                        $(this).css({
		                            visibility: "visible"
		                        })
		                        singleDong($(this))
		                    }
		                })

		            }
                });
