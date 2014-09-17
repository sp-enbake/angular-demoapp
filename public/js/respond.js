


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Respond/dest/respond.min.js at master · scottjehl/Respond</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe127-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (e1c0c3f392) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="0E62EFE7:2B99:67B5ACC:52BAD4C7" name="octolytics-dimension-request_id" /><meta content="6195603" name="octolytics-actor-id" /><meta content="jetinanand" name="octolytics-actor-login" /><meta content="0ff17fd80d25323b7d10a50bc8b6171371182c746ed59d6c8074ceae2d174e49" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="PqwurkE9Kec3oHz3zctP5ScBP6Bx1ggBwi/k4rHjCco=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-8f6ca9b17ae3eba1e30276eef0a16282cb651c78.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-5a80bdfa39bad96522873dfd72fa56c72e6675b3.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-29a3fb0547e33bd8d4530bbad9bae3ef00d83293.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-0b6bf4a8bb8bc8246eb6d07db6a63cde130f5001.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="25e9435426189c5ffea9ed5e7a16f621">

        <link data-pjax-transient rel='permalink' href='/scottjehl/Respond/blob/20b7f4a192bb910c8c7e067b961de38519d334e4/dest/respond.min.js'>
  <meta property="og:title" content="Respond"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/scottjehl/Respond"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="Respond - A fast &amp; lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)"/>

  <meta name="description" content="Respond - A fast &amp; lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)" />

  <meta content="214783" name="octolytics-dimension-user_id" /><meta content="scottjehl" name="octolytics-dimension-user_login" /><meta content="1337658" name="octolytics-dimension-repository_id" /><meta content="scottjehl/Respond" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1337658" name="octolytics-dimension-repository_network_root_id" /><meta content="scottjehl/Respond" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/scottjehl/Respond/commits/master.atom" rel="alternate" title="Recent Commits to Respond:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="jetinanand"
      data-repo="scottjehl/Respond"
      data-branch="master"
      data-sha="6ccf2075043d5d74ba9bc8b0051ccff6cefd84f4"
  >

    <input type="hidden" name="nwo" value="scottjehl/Respond" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/jetinanand" class="name">
        <img height="20" src="https://2.gravatar.com/avatar/869db1509285d3a88a1f4291d037a7cf?d=https%3A%2F%2Fidenticons.github.com%2F84d6039116d442868e846a8559594656.png&amp;r=x&amp;s=140" width="20" /> jetinanand
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="scottjehl/Respond">This repository</span>
    </li>
      <li>
        <a href="/scottjehl/Respond/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="PqwurkE9Kec3oHz3zctP5ScBP6Bx1ggBwi/k4rHjCco=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1337658" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/scottjehl/Respond/watchers">
        370
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/scottjehl/Respond/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/scottjehl/Respond/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/scottjehl/Respond/stargazers">
        6,011
      </a>
  </div>

  </li>


        <li>
          <a href="/scottjehl/Respond/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/scottjehl/Respond/network" class="social-count">2,058</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/scottjehl" class="url fn" itemprop="url" rel="author"><span itemprop="title">scottjehl</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/scottjehl/Respond" class="js-current-repository js-repo-home-link">Respond</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container  ">

        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/scottjehl/Respond" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /scottjehl/Respond">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/scottjehl/Respond/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /scottjehl/Respond/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>33</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/scottjehl/Respond/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /scottjehl/Respond/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>9</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/scottjehl/Respond/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /scottjehl/Respond/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/scottjehl/Respond/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /scottjehl/Respond/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/scottjehl/Respond/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /scottjehl/Respond/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/scottjehl/Respond/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /scottjehl/Respond/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/scottjehl/Respond.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/scottjehl/Respond.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:scottjehl/Respond.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:scottjehl/Respond.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/scottjehl/Respond" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/scottjehl/Respond" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/scottjehl/Respond" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

              <a href="/scottjehl/Respond/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:d3ef343cc7a2bc80d0b9c20f18b90d31 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/scottjehl/Respond/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/cross-domain/dest/respond.min.js"
                 data-name="cross-domain"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="cross-domain">cross-domain</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/em-experimental/dest/respond.min.js"
                 data-name="em-experimental"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="em-experimental">em-experimental</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/em-support/dest/respond.min.js"
                 data-name="em-support"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="em-support">em-support</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/gh-pages/dest/respond.min.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/master/dest/respond.min.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/shorthand-syntax/dest/respond.min.js"
                 data-name="shorthand-syntax"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="shorthand-syntax">shorthand-syntax</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/stevelove-logical-not/dest/respond.min.js"
                 data-name="stevelove-logical-not"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="stevelove-logical-not">stevelove-logical-not</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/v1.4.2/dest/respond.min.js"
                 data-name="v1.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.4.2">v1.4.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.4.1/dest/respond.min.js"
                 data-name="1.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.1">1.4.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.4.0/dest/respond.min.js"
                 data-name="1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.0">1.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.3.0/dest/respond.min.js"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.2.0/dest/respond.min.js"
                 data-name="1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.2.0">1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.1.0/dest/respond.min.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.0.1/dest/respond.min.js"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.0.0/dest/respond.min.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/scottjehl/Respond" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Respond</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/scottjehl/Respond/tree/master/dest" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dest</span></a></span><span class="separator"> / </span><strong class="final-path">respond.min.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="dest/respond.min.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/68381e630f863e6b76ff075e09c5139f?d=https%3A%2F%2Fidenticons.github.com%2F0363d80bc12ebcadce8ed468571d27aa.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/jlembeck" rel="author">jlembeck</a></span>
    <time class="js-relative-date" datetime="2013-12-18T20:44:31-08:00" title="2013-12-18 20:44:31">December 18, 2013</time>
    <div class="commit-title">
        <a href="/scottjehl/Respond/commit/20b7f4a192bb910c8c7e067b961de38519d334e4" class="message" data-pjax="true" title="New build versions">New build versions</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>3</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="jlembeck" href="/scottjehl/Respond/commits/master/dest/respond.min.js?author=jlembeck"><img height="20" src="https://0.gravatar.com/avatar/68381e630f863e6b76ff075e09c5139f?d=https%3A%2F%2Fidenticons.github.com%2F0363d80bc12ebcadce8ed468571d27aa.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="zachleat" href="/scottjehl/Respond/commits/master/dest/respond.min.js?author=zachleat"><img height="20" src="https://2.gravatar.com/avatar/e1899004c71c7043343196103e210be3?d=https%3A%2F%2Fidenticons.github.com%2F67b46df8fd1c23206e0572850ac213b5.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tomfuertes" href="/scottjehl/Respond/commits/master/dest/respond.min.js?author=tomfuertes"><img height="20" src="https://2.gravatar.com/avatar/ab723230839161b25b5f8488a9ebbbbd?d=https%3A%2F%2Fidenticons.github.com%2F903853c72abf06bb1f2868587553be32.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/68381e630f863e6b76ff075e09c5139f?d=https%3A%2F%2Fidenticons.github.com%2F0363d80bc12ebcadce8ed468571d27aa.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jlembeck">jlembeck</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/e1899004c71c7043343196103e210be3?d=https%3A%2F%2Fidenticons.github.com%2F67b46df8fd1c23206e0572850ac213b5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/zachleat">zachleat</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/ab723230839161b25b5f8488a9ebbbbd?d=https%3A%2F%2Fidenticons.github.com%2F903853c72abf06bb1f2868587553be32.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tomfuertes">tomfuertes</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>5 lines (4 sloc)</span>
        <span>4.377 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="github-windows://openRepo/https://github.com/scottjehl/Respond?branch=master&amp;filepath=dest%2Frespond.min.js" title="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/scottjehl/Respond/edit/master/dest/respond.min.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/scottjehl/Respond/raw/master/dest/respond.min.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/scottjehl/Respond/blame/master/dest/respond.min.js" class="button minibutton ">Blame</a>
          <a href="/scottjehl/Respond/commits/master/dest/respond.min.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/scottjehl/Respond/delete/master/dest/respond.min.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>

            </td>
            <td class="blob-line-code">
                    <div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl</span></div><div class='line' id='LC2'><span class="cm"> * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT</span></div><div class='line' id='LC3'><span class="cm"> *  */</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="o">!</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="s2">&quot;use strict&quot;</span><span class="p">;</span><span class="nx">a</span><span class="p">.</span><span class="nx">matchMedia</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">matchMedia</span><span class="o">||</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">firstElementChild</span><span class="o">||</span><span class="nx">c</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">f</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="s2">&quot;mq-test-1&quot;</span><span class="p">,</span><span class="nx">f</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">cssText</span><span class="o">=</span><span class="s2">&quot;position:absolute;top:-100em&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">background</span><span class="o">=</span><span class="s2">&quot;none&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">f</span><span class="p">),</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">f</span><span class="p">.</span><span class="nx">innerHTML</span><span class="o">=</span><span class="s1">&#39;&amp;shy;&lt;style media=&quot;&#39;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s1">&#39;&quot;&gt; #mq-test-1 { width: 42px; }&lt;/style&gt;&#39;</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">d</span><span class="p">),</span><span class="nx">b</span><span class="o">=</span><span class="mi">42</span><span class="o">===</span><span class="nx">f</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">e</span><span class="p">),{</span><span class="nx">matches</span><span class="o">:</span><span class="nx">b</span><span class="p">,</span><span class="nx">media</span><span class="o">:</span><span class="nx">a</span><span class="p">}}}(</span><span class="nx">a</span><span class="p">.</span><span class="nb">document</span><span class="p">)}(</span><span class="k">this</span><span class="p">),</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="s2">&quot;use strict&quot;</span><span class="p">;</span><span class="kd">function</span> <span class="nx">b</span><span class="p">(){</span><span class="nx">u</span><span class="p">(</span><span class="o">!</span><span class="mi">0</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="p">{};</span><span class="nx">a</span><span class="p">.</span><span class="nx">respond</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">update</span><span class="o">=</span><span class="kd">function</span><span class="p">(){};</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="p">[],</span><span class="nx">e</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=!</span><span class="mi">1</span><span class="p">;</span><span class="k">try</span><span class="p">{</span><span class="nx">b</span><span class="o">=</span><span class="k">new</span> <span class="nx">a</span><span class="p">.</span><span class="nx">XMLHttpRequest</span><span class="p">}</span><span class="k">catch</span><span class="p">(</span><span class="nx">c</span><span class="p">){</span><span class="nx">b</span><span class="o">=</span><span class="k">new</span> <span class="nx">a</span><span class="p">.</span><span class="nx">ActiveXObject</span><span class="p">(</span><span class="s2">&quot;Microsoft.XMLHTTP&quot;</span><span class="p">)}</span><span class="k">return</span> <span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">b</span><span class="p">}}(),</span><span class="nx">f</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">e</span><span class="p">();</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="s2">&quot;GET&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">),</span><span class="nx">c</span><span class="p">.</span><span class="nx">onreadystatechange</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="mi">4</span><span class="o">!==</span><span class="nx">c</span><span class="p">.</span><span class="nx">readyState</span><span class="o">||</span><span class="mi">200</span><span class="o">!==</span><span class="nx">c</span><span class="p">.</span><span class="nx">status</span><span class="o">&amp;&amp;</span><span class="mi">304</span><span class="o">!==</span><span class="nx">c</span><span class="p">.</span><span class="nx">status</span><span class="o">||</span><span class="nx">b</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">responseText</span><span class="p">)},</span><span class="mi">4</span><span class="o">!==</span><span class="nx">c</span><span class="p">.</span><span class="nx">readyState</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="kc">null</span><span class="p">))};</span><span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">ajax</span><span class="o">=</span><span class="nx">f</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">queue</span><span class="o">=</span><span class="nx">d</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">regex</span><span class="o">=</span><span class="p">{</span><span class="nx">media</span><span class="o">:</span><span class="sr">/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi</span><span class="p">,</span><span class="nx">keyframes</span><span class="o">:</span><span class="sr">/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi</span><span class="p">,</span><span class="nx">urls</span><span class="o">:</span><span class="sr">/(url\()[&#39;&quot;]?([^\/\)&#39;&quot;][^:\)&#39;&quot;]+)[&#39;&quot;]?(\))/g</span><span class="p">,</span><span class="nx">findStyles</span><span class="o">:</span><span class="sr">/@media *([^\{]+)\{([\S\s]+?)$/</span><span class="p">,</span><span class="nx">only</span><span class="o">:</span><span class="sr">/(only\s+)?([a-zA-Z]+)\s?/</span><span class="p">,</span><span class="nx">minw</span><span class="o">:</span><span class="sr">/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/</span><span class="p">,</span><span class="nx">maxw</span><span class="o">:</span><span class="sr">/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/</span><span class="p">},</span><span class="nx">c</span><span class="p">.</span><span class="nx">mediaQueriesSupported</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">matchMedia</span><span class="o">&amp;&amp;</span><span class="kc">null</span><span class="o">!==</span><span class="nx">a</span><span class="p">.</span><span class="nx">matchMedia</span><span class="p">(</span><span class="s2">&quot;only all&quot;</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">.</span><span class="nx">matchMedia</span><span class="p">(</span><span class="s2">&quot;only all&quot;</span><span class="p">).</span><span class="nx">matches</span><span class="p">,</span><span class="o">!</span><span class="nx">c</span><span class="p">.</span><span class="nx">mediaQueriesSupported</span><span class="p">){</span><span class="kd">var</span> <span class="nx">g</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nb">document</span><span class="p">,</span><span class="nx">k</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="p">[],</span><span class="nx">m</span><span class="o">=</span><span class="p">[],</span><span class="nx">n</span><span class="o">=</span><span class="p">[],</span><span class="nx">o</span><span class="o">=</span><span class="p">{},</span><span class="nx">p</span><span class="o">=</span><span class="mi">30</span><span class="p">,</span><span class="nx">q</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;head&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span><span class="o">||</span><span class="nx">k</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;base&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span><span class="nx">s</span><span class="o">=</span><span class="nx">q</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;link&quot;</span><span class="p">),</span><span class="nx">t</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">body</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">k</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="p">,</span><span class="nx">f</span><span class="o">=!</span><span class="mi">1</span><span class="p">;</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">cssText</span><span class="o">=</span><span class="s2">&quot;position:absolute;font-size:1em;width:1em&quot;</span><span class="p">,</span><span class="nx">c</span><span class="o">||</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="nx">f</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">),</span><span class="nx">c</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">background</span><span class="o">=</span><span class="s2">&quot;none&quot;</span><span class="p">),</span><span class="nx">k</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="o">=</span><span class="s2">&quot;100%&quot;</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="o">=</span><span class="s2">&quot;100%&quot;</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">b</span><span class="p">),</span><span class="nx">f</span><span class="o">&amp;&amp;</span><span class="nx">k</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">k</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">,</span><span class="nx">f</span><span class="o">?</span><span class="nx">k</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">b</span><span class="p">),</span><span class="nx">k</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="o">=</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="o">=</span><span class="nx">e</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">i</span><span class="o">=</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">a</span><span class="p">)},</span><span class="nx">u</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="s2">&quot;clientWidth&quot;</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">k</span><span class="p">[</span><span class="nx">c</span><span class="p">],</span><span class="nx">e</span><span class="o">=</span><span class="s2">&quot;CSS1Compat&quot;</span><span class="o">===</span><span class="nx">j</span><span class="p">.</span><span class="nx">compatMode</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="o">||</span><span class="nx">j</span><span class="p">.</span><span class="nx">body</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">||</span><span class="nx">d</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="p">{},</span><span class="nx">o</span><span class="o">=</span><span class="nx">s</span><span class="p">[</span><span class="nx">s</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">],</span><span class="nx">r</span><span class="o">=</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">).</span><span class="nx">getTime</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="o">&amp;&amp;</span><span class="nx">p</span><span class="o">&gt;</span><span class="nx">r</span><span class="o">-</span><span class="nx">g</span><span class="p">)</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">h</span><span class="p">),</span><span class="nx">h</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">u</span><span class="p">,</span><span class="nx">p</span><span class="p">),</span><span class="k">void</span> <span class="mi">0</span><span class="p">;</span><span class="nx">g</span><span class="o">=</span><span class="nx">r</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">v</span> <span class="k">in</span> <span class="nx">l</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">l</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">v</span><span class="p">)){</span><span class="kd">var</span> <span class="nx">w</span><span class="o">=</span><span class="nx">l</span><span class="p">[</span><span class="nx">v</span><span class="p">],</span><span class="nx">x</span><span class="o">=</span><span class="nx">w</span><span class="p">.</span><span class="nx">minw</span><span class="p">,</span><span class="nx">y</span><span class="o">=</span><span class="nx">w</span><span class="p">.</span><span class="nx">maxw</span><span class="p">,</span><span class="nx">z</span><span class="o">=</span><span class="kc">null</span><span class="o">===</span><span class="nx">x</span><span class="p">,</span><span class="nx">A</span><span class="o">=</span><span class="kc">null</span><span class="o">===</span><span class="nx">y</span><span class="p">,</span><span class="nx">B</span><span class="o">=</span><span class="s2">&quot;em&quot;</span><span class="p">;</span><span class="nx">x</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">x</span><span class="o">=</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span><span class="o">*</span><span class="p">(</span><span class="nx">x</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">B</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="o">?</span><span class="nx">i</span><span class="o">||</span><span class="nx">t</span><span class="p">()</span><span class="o">:</span><span class="mi">1</span><span class="p">)),</span><span class="nx">y</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">y</span><span class="o">=</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">y</span><span class="p">)</span><span class="o">*</span><span class="p">(</span><span class="nx">y</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">B</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="o">?</span><span class="nx">i</span><span class="o">||</span><span class="nx">t</span><span class="p">()</span><span class="o">:</span><span class="mi">1</span><span class="p">)),</span><span class="nx">w</span><span class="p">.</span><span class="nx">hasquery</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">z</span><span class="o">&amp;&amp;</span><span class="nx">A</span><span class="o">||!</span><span class="p">(</span><span class="nx">z</span><span class="o">||</span><span class="nx">e</span><span class="o">&gt;=</span><span class="nx">x</span><span class="p">)</span><span class="o">||!</span><span class="p">(</span><span class="nx">A</span><span class="o">||</span><span class="nx">y</span><span class="o">&gt;=</span><span class="nx">e</span><span class="p">))</span><span class="o">||</span><span class="p">(</span><span class="nx">f</span><span class="p">[</span><span class="nx">w</span><span class="p">.</span><span class="nx">media</span><span class="p">]</span><span class="o">||</span><span class="p">(</span><span class="nx">f</span><span class="p">[</span><span class="nx">w</span><span class="p">.</span><span class="nx">media</span><span class="p">]</span><span class="o">=</span><span class="p">[]),</span><span class="nx">f</span><span class="p">[</span><span class="nx">w</span><span class="p">.</span><span class="nx">media</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="nx">w</span><span class="p">.</span><span class="nx">rules</span><span class="p">]))}</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">C</span> <span class="k">in</span> <span class="nx">n</span><span class="p">)</span><span class="nx">n</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">C</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">n</span><span class="p">[</span><span class="nx">C</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">n</span><span class="p">[</span><span class="nx">C</span><span class="p">].</span><span class="nx">parentNode</span><span class="o">===</span><span class="nx">q</span><span class="o">&amp;&amp;</span><span class="nx">q</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">n</span><span class="p">[</span><span class="nx">C</span><span class="p">]);</span><span class="nx">n</span><span class="p">.</span><span class="nx">length</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">D</span> <span class="k">in</span> <span class="nx">f</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">D</span><span class="p">)){</span><span class="kd">var</span> <span class="nx">E</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;style&quot;</span><span class="p">),</span><span class="nx">F</span><span class="o">=</span><span class="nx">f</span><span class="p">[</span><span class="nx">D</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;\n&quot;</span><span class="p">);</span><span class="nx">E</span><span class="p">.</span><span class="nx">type</span><span class="o">=</span><span class="s2">&quot;text/css&quot;</span><span class="p">,</span><span class="nx">E</span><span class="p">.</span><span class="nx">media</span><span class="o">=</span><span class="nx">D</span><span class="p">,</span><span class="nx">q</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span><span class="nx">o</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">),</span><span class="nx">E</span><span class="p">.</span><span class="nx">styleSheet</span><span class="o">?</span><span class="nx">E</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">cssText</span><span class="o">=</span><span class="nx">F</span><span class="o">:</span><span class="nx">E</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">j</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="nx">F</span><span class="p">)),</span><span class="nx">n</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">E</span><span class="p">)}},</span><span class="nx">v</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">keyframes</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">match</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">media</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="nx">e</span><span class="p">.</span><span class="nx">length</span><span class="o">||</span><span class="mi">0</span><span class="p">;</span><span class="nx">b</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">));</span><span class="kd">var</span> <span class="nx">g</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">urls</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="o">+</span><span class="nx">b</span><span class="o">+</span><span class="s2">&quot;$2$3&quot;</span><span class="p">)},</span><span class="nx">h</span><span class="o">=!</span><span class="nx">f</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="p">;</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="o">+=</span><span class="s2">&quot;/&quot;</span><span class="p">),</span><span class="nx">h</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">f</span><span class="o">=</span><span class="mi">1</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">f</span><span class="o">&gt;</span><span class="nx">i</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">j</span><span class="p">,</span><span class="nx">k</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">o</span><span class="p">;</span><span class="nx">h</span><span class="o">?</span><span class="p">(</span><span class="nx">j</span><span class="o">=</span><span class="nx">d</span><span class="p">,</span><span class="nx">m</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">g</span><span class="p">(</span><span class="nx">a</span><span class="p">)))</span><span class="o">:</span><span class="p">(</span><span class="nx">j</span><span class="o">=</span><span class="nx">e</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">match</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">findStyles</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">,</span><span class="nx">m</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span><span class="p">))),</span><span class="nx">n</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">),</span><span class="nx">o</span><span class="o">=</span><span class="nx">n</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">p</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">o</span><span class="o">&gt;</span><span class="nx">p</span><span class="p">;</span><span class="nx">p</span><span class="o">++</span><span class="p">)</span><span class="nx">k</span><span class="o">=</span><span class="nx">n</span><span class="p">[</span><span class="nx">p</span><span class="p">],</span><span class="nx">l</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span><span class="nx">media</span><span class="o">:</span><span class="nx">k</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;(&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">match</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">only</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span><span class="o">||</span><span class="s2">&quot;all&quot;</span><span class="p">,</span><span class="nx">rules</span><span class="o">:</span><span class="nx">m</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="nx">hasquery</span><span class="o">:</span><span class="nx">k</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;(&quot;</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="p">,</span><span class="nx">minw</span><span class="o">:</span><span class="nx">k</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">minw</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">)</span><span class="o">+</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span><span class="o">||</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">maxw</span><span class="o">:</span><span class="nx">k</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">maxw</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">)</span><span class="o">+</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span><span class="o">||</span><span class="s2">&quot;&quot;</span><span class="p">)})}</span><span class="nx">u</span><span class="p">()},</span><span class="nx">w</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span><span class="nx">f</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">c</span><span class="p">){</span><span class="nx">v</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">media</span><span class="p">),</span><span class="nx">o</span><span class="p">[</span><span class="nx">b</span><span class="p">.</span><span class="nx">href</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">w</span><span class="p">()},</span><span class="mi">0</span><span class="p">)})}},</span><span class="nx">x</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">b</span><span class="o">&lt;</span><span class="nx">s</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">b</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">s</span><span class="p">[</span><span class="nx">b</span><span class="p">],</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">media</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">rel</span><span class="o">&amp;&amp;</span><span class="s2">&quot;stylesheet&quot;</span><span class="o">===</span><span class="nx">c</span><span class="p">.</span><span class="nx">rel</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="o">&amp;&amp;!</span><span class="nx">o</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">styleSheet</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">rawCssText</span><span class="o">?</span><span class="p">(</span><span class="nx">v</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">rawCssText</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">),</span><span class="nx">o</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">)</span><span class="o">:</span><span class="p">(</span><span class="o">!</span><span class="sr">/^([a-zA-Z:]*\/\/)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">&amp;&amp;!</span><span class="nx">r</span><span class="o">||</span><span class="nx">e</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span><span class="o">===</span><span class="nx">a</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">host</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="s2">&quot;//&quot;</span><span class="o">===</span><span class="nx">e</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">2</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="o">+</span><span class="nx">e</span><span class="p">),</span><span class="nx">d</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span><span class="nx">href</span><span class="o">:</span><span class="nx">e</span><span class="p">,</span><span class="nx">media</span><span class="o">:</span><span class="nx">f</span><span class="p">})))}</span><span class="nx">w</span><span class="p">()};</span><span class="nx">x</span><span class="p">(),</span><span class="nx">c</span><span class="p">.</span><span class="nx">update</span><span class="o">=</span><span class="nx">x</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">getEmValue</span><span class="o">=</span><span class="nx">t</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">?</span><span class="nx">a</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;resize&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">)</span><span class="o">:</span><span class="nx">a</span><span class="p">.</span><span class="nx">attachEvent</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s2">&quot;onresize&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">)}}(</span><span class="k">this</span><span class="p">);</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.03827s from github-fe127-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/scottjehl/Respond/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

