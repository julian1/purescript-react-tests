module Main where


import Prelude
import React.DOM as D
import React.DOM.Props as P
import Container (container)
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (log)
import DOM (DOM())
import DOM.HTML (window)
import DOM.HTML.Types (htmlDocumentToDocument)
import DOM.HTML.Window (document)
import DOM.Node.NonElementParentNode (getElementById)
import DOM.Node.Types (Element, ElementId(..), documentToNonElementParentNode)
import Data.Int (decimal, toStringAs)
import Data.Maybe (fromJust)
import Data.Nullable (toMaybe)
import Partial.Unsafe (unsafePartial)
import React (ReactElement, ReactClass, createElement, createFactory, createClass, writeState, readState, spec, createClassStateless, getProps)
import ReactDOM (render)

main :: String
main = "whoot"



hello :: forall props. ReactClass { name :: String | props }
hello = createClass $ spec unit \ctx -> do
  props <- getProps ctx
  pure $ D.h1 [ P.className "Hello"
              , P.style { background: "lightgray" }
              ]
              [ D.text "Hello, "
              , D.text props.name
              , createElement (createClassStateless \props' -> D.div' [ D.text $ "Stateless" <> props'.test ])
                                { test: " test" } []
              ]

-- http://alexey.raga.name/posts/2015/09/28/purescript-react-electron/
-- type Stock = { symbol :: String, name :: String, sector :: String }

-- type PageState = { currentStock :: Stock }
-- initState = { currentStock: head sp500 }

helloWorldComponent = createClass $ spec unit \ctx -> do
  props <- getProps ctx    --not used, just for demo
  state <- readState ctx   --not used, just for demo
  pure $ D.span [ P.className "my-span" ] [ D.text "Hello World" ]


